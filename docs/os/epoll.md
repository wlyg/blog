# 多路复用I/O
&emsp;&emsp;epoll 是 Linux 内核为处理大批量文件描述符而作了改进的 poll，是 Linux 下多路复用 IO接口 select/poll 的增强版本。在 linux 的网络编程中，很长时间都在使用 select 来做事件触发。在 2.6 内核中，有一种替换它的机制，就是 epoll。
### select 与 epoll 区别概述
- 函数使用上：epoll 使用一组函数来完成任务，而不是单个函数。
- 效率：select 使用轮询来处理，随着监听 fd 数目的增加而降低效率。而 epoll 把用户关心的文件描述符事件放在内核里的一个事件表（mmap）中，只需要一个额外的文件描述符来标识内核中的这个事件表即可。
### 内核/用户空间内存拷贝问题
&emsp;&emsp;无论是select，poll还是epoll，它们都需要内核把fd消息通知给用户空间。因此，如何避免不必要的内存拷贝就很重要了。select在解决将fd消息传递给用户空间时采用了内存拷贝的方式。这样，其处理效率不高。
#### 使用mmap加速内核与用户空间的消息传递
&emsp;&emsp;epoll通过内核与用户空间mmap同一块内存来实现。
### sendfile
&emsp;&emsp;sendfile函数在两个文件描述符之间传递数据（完全在内核中操作），从而避免了内核缓冲区和用户缓冲区之间的数据拷贝，效率很高，被称为零拷贝。函数定义为：
```
#include<sys/sendfile.h>
ssize_t senfile(int out_fd,int in_fd,off_t* offset,size_t count);
```
