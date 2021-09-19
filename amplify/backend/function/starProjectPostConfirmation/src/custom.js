const aws = require("aws-sdk")
const ddb = new aws.DynamoDB()

const tableName = process.env.USERTABLE
exports.handler = async (event, context, callback) => {
  // insert code to be executed by your lambda trigger
  // save user to dynamodb 

  if (!event?.request?.userAttributes?.sub){
    console.log("No sub provided")
    return

  }
const now = new Date()
const timestamp = now.getTime()
  const userItem ={
    __typename: {S:"User"},
    _lastChangedAt: {N:timestamp.toString()},
    _version: {N:"1"},
    createdAt:{S: now.toISOString()} ,
    updatedAt:{S: now.toISOString()}   ,
    id:{ S: event.request.userAttributes.sub} ,
    name: {S: event.request.userAttributes.email},
  }
  // callback(null, event);

  const params ={
    Item:userItem,
    TableName:tableName

  }

  try{
    ddb.putItem(params).promise()
    console.log("success")
  }catch (e){
    console.log(e)
  }
  ddb.putItem(params).promise()
};

