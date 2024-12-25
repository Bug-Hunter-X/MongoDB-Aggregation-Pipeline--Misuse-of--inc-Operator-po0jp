```javascript
//Incorrect usage of $inc operator in MongoDB aggregation pipeline
db.collection.aggregate([
  { $match: { /* some query */ } },
  { $group: { _id: '$someField', count: { $sum: 1 } } },
  { $inc: { count: 1 } } // Incorrect: $inc can't be used in this stage
]);
```