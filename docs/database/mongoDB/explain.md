# 索引相关
```
创建索引: db.collection.createIndex(keys, options)
eg: 创建索引: db.user.createIndex("age": 1)
```
#### 使用性能分析函数explain()
```
db.user.find({ age: { $gte: 10, $lte: 20 } }).explain("executionStats")
```
#### 结果分析
Stage | 描述
-|-  
| COLLSCAN | 全表扫描 |  
| IXSCAN | 扫描索引 |
```
executionStats.executionTimeMillis: query的整体查询时间。  
executionStats.nReturned: 查询返回的条目。  
executionStats.totalKeysExamined： 索引扫描条目。  
executionStats.totalDocsExamined： 文档扫描条目。
```
```
理想状态：nReturned=totalKeysExamined & totalDocsExamined=0
```