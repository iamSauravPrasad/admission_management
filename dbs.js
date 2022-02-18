const mysql=require('mysql2');
const express=require('express');
var app=express();
const parser=require('body-parser');
app.use(parser.json());
var connection=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'123456',
        database:'Admission_Managment'
    });
    connection.connect((err)=>
    {
        if(!err)
        console.log('DB Connected...');
        else
        console.log('Error');
    })
    app.listen(5700,()=>console.log('Server Startred...'));
    app.get('/admission_coordinator',(req,res)=>
    {
        connection.query('SELECT * FROM admission_coordinator',(err,rows,fields)=>
        {
            if(!err)
            res.send(rows);
            else
            console.log("error");
        })
    })
    app.get('/admission_coordinator/:id',(req,res)=>
    {
        connection.query('SELECT *FROM admission_coordinator WHERE co_id=?',[req.params.id],(err,rows,fields)=>
        {
            if(!err)
            res.send(rows);
            else
            console.log("error");
        })
    })

app.get('/add',(req,res)=>
{
    var post={co_id:33, co_name:'yts', co_email:'yts@gmail.com', co_phone:965823147,class_assigned:'X'};
    var sql='INSERT INTO admission_coordinator SET ?';
    var query=connection.query(sql,post,(err,result)=>
    {
        if(err) throw error;
        res.send("Inserted Rows.....")
    });
});
app.get('/update/:id',(req,res)=>
{
    var name1='Reena'
    var sql=`UPDATE admission_coordinator SET co_name='${name1}' WHERE co_id=${req.params.id}`;
    var query=connection.query(sql,(err,result)=>
    {
        if(err) throw err;
        res.send("Updated the Rows.....")
    });
});
app.get('/delete/:id',(req,res)=>
{
    var sql=`DELETE FROM admission_coordinator WHERE co_id=${req.params.id}`;
    var query=connection.query(sql,(err,result)=>
    {
        if(err) throw err;
        res.send("Deleted the Rows.....")
    });
});