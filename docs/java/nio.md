# Java NIO
### BIO
&emsp;&emsp;BIO全称是Blocking IO，是JDK1.4之前的传统IO模型，本身是同步阻塞模式，针对网络通信都是一请求一应答的方式，虽然简化了上层的应用开发，但在性能和可靠性方面存在着巨大瓶颈，试想一下如果每个请求都需要新建一个线程来专门处理，那么在高并发的场景下，机器资源很快就会被耗尽，当然，我们可以通过线程池来优化这种情况，但即使是这样，仍然改变不了阻塞IO的根本问题，就是在IO执行的两个阶段都被block了。拿一个read操作来举例子，在linux中，应用程序向linux发起read操作，会经历两个步骤：
- 第一个阶段linux内核首先会把需要读取的数据加载到操作系统内核的缓冲区中（Linux文件系统是缓存IO，也称标准IO）。
- 第二个阶段应用程序拷贝内核里面的数据到自己的用户空间中。
&emsp;&emsp;如果是socket操作，类似也会经历两个步骤：
- 第一个阶段：通常涉及等待网络上的数据分组包到达，然后被复制到内核的缓冲区。
- 第二个阶段：把数据从内核缓冲区，从内核缓冲区拷贝到用户进程的内存空间里面。
&emsp;&emsp;同步阻塞IO之所以效率低下，就是因为在这两个阶段，用户的线程或者进程都是阻塞的，期间虽然不占cpu资源，但也意味着该线程也不能再干其他事。
### NIO
&emsp;&emsp;NIO主要有buffer、channel、selector三种技术的整合，通过零拷贝的buffer取得数据，每一个客户端通过channel在selector（多路复用器）上进行注册。服务端不断轮询channel来获取客户端的信息。channel上有connect,accept（阻塞）、read（可读）、write(可写)四种状态标识。根据标识来进行后续操作。所以一个服务端可接收无限多的channel。不需要新开一个线程。大大提升了性能。
#### NIO的组成部分
- Buffer：高效的数据容器，除了布尔类型，所有原始数据类型都有相应的 Buffer 实现。
- Channel：类似在 Linux 之类操作系统上看到的文件描述符，是 NIO 中被用来支持批量式 IO 操作的一种抽象。
- Selector：是 NIO 实现多路复用的基础，它提供了一种高效的机制，可以检测到注册在 Selector 上的多个 Channel 中，是否有 Channel 处于就绪状态，进而实现了单线程对多 Channel 的高效管理。(linux基于epoll)
- Chartset：提供 Unicode 字符串定义，NIO 也提供了相应的编解码器等。
<img src="../../images/java/nio.png" width="800" hegiht="800" align=center /><br>
