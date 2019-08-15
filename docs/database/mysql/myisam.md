# MyISAM索引实现
&emsp;&emsp;MyISAM索引文件和数据文件是分离的，索引文件仅保存数据记录的地址。MyISAM引擎使用B+Tree作为索引结构，叶节点的data域存放的是数据记录的地址。下图是MyISAM主键索引的原理图：
<img src="../../../images/database/mysql/MyISAM_index.png" width="600" hegiht="500" align=center /><br>
MyISAM的索引方式也叫做“非聚集”的，之所以这么称呼是为了与InnoDB的聚集索引区分。