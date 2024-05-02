# -*- coding: utf-8 -*- 


from flask import Flask,render_template,request,g,session,url_for,send_file
import MySQLdb
import os
import json
from flask_cors import CORS
from time import localtime, strftime  
import datetime
import uuid
import pandas as pd


#MySQL配置
host = 'localhost'
user = 'root'
password = '123'
database = 'pro'



app = Flask(__name__) 


app.config['UPLOAD_FOLDER'] = '/www/wwwroot/test/back/static/image'

cors = CORS(app, resources={r"/*": {"origins": "*"}}) 


# 建立数据库连接
db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)



#定义路由
@app.route("/login",methods=['POST','GET'])
def login():
    id = request.values.get("id")
    pwd = request.values.get("pwd")

    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    cursor.execute("SELECT * from teacher where id = %s and pwd = %s",(id,pwd,))

    #查询结果 只查一个
    data = cursor.fetchall()

    #查询结果个数
    count = cursor.rowcount

    if count != 0:
        return "ok"
    else:
        return "no"
		
#定义路由
@app.route("/test",methods=['POST','GET'])
def test():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
	
    id = request.values.get("id")
    cursor.execute("SELECT * from que where id = %s and is_show = 1",(id,))

    #查询结果 只查一个
    data = cursor.fetchall()
	

	
    #查询结果个数
    count = cursor.rowcount
	
    print(data)

    return json.dumps(data)
	
	
@app.route("/getp",methods=['POST','GET'])
def get_p():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
	
	
    id = request.values.get("id")
    cursor.execute("SELECT ap,bp,cp,dp from que where id = " + id)
	
	#查询结果 只查一个
    data = cursor.fetchone()
	
	
	
	
    print(data)
	
    return json.dumps(data)
	
	

@app.route("/addc",methods=['POST','GET'])
def add_c():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
	
    id = request.values.get("id")
    c = int(request.values.get("c"))
	
    array = ['a','b','c','d']
	
    c = array[c]
	
	
    sql = "UPDATE que set {}p = {}p + 1 where id = {}".format(c,c,id)
	
    print(sql)
	
	
	
    cursor.execute(sql)
	
    db.commit()
	
    return "yes"
	
	
@app.route("/getr",methods=['POST','GET'])
def getr():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
	
    sql = "SELECT id from que order by rand() limit 1"
	
    cursor.execute(sql)
	
	
	#查询结果 只查一个
    data = cursor.fetchone()
	
	
	
    return json.dumps(data)
    
    
@app.route("/addt",methods=['POST','GET'])
def addt():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    
    temp = request.values.get("temp")
    humi = request.values.get("humi")
    time = strftime("%H:%M", localtime()) 
    dates = str(datetime.date.today())
    
    cursor.execute("insert into tmp(date,time,temp,humi) values(%s,%s,%s,%s)",(dates,time,temp,humi))
    
    db.commit()
    
    return "200"
    
    
@app.route("/gett",methods=['POST','GET'])
def gett():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    
    dates = str(datetime.date.today())
    
    
    cursor.execute("SELECT temp,time FROM(SELECT temp,time FROM tmp WHERE date = %s ORDER BY time DESC LIMIT 10)aa ORDER BY time",(dates,))

    
    
    data = cursor.fetchall()
	
	
	
    return json.dumps(data)
    
    
    
@app.route("/add",methods=['POST','GET'])
def add():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    que = request.values.get("que")
    a = request.values.get("a")
    b = request.values.get("b")
    c = request.values.get("c")
    d = request.values.get("d")
    ans = request.values.get("ans")
    #sql = "INSERT INTO que (que,a,b,c,d,ans) values(%s,%s,%s,%s,%s,%s)",(que,a,b,c,d,ans,)
	
    cursor.execute("insert into que(que,a,b,c,d,ans) values(%s,%s,%s,%s,%s,%s)",(que,a,b,c,d,ans))
    #print(sql)
    
    #cursor.execute(sql)

    db.commit()
	
	
	
    return "200"
    

#获取题单
@app.route("/getql",methods=['POST','GET'])
def getql():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    
    cursor.execute("select * from que_list")
    
    data = cursor.fetchall()
    
    return json.dumps(data)
    
    
#根据提单获取题目
@app.route("/getque",methods=['POST','GET'])
def getque():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    
    list_id = request.values.get("list_id")
    
    
    cursor.execute("select * from que where list_id = %s",(list_id))
    
    
        
    data = cursor.fetchall()
    
    return json.dumps(data)
	
   
    
    
    
#显示图片
@app.route('/image/<url>')  
def show_image(url):  
    # 图片文件的路径
    
 
    
    image_path = os.path.join('static/image', url)  
      
  
    # 使用 send_file 来发送图片文件  
    return send_file(image_path, mimetype='image/jpeg')
    

    
#上传图片
@app.route('/upload', methods=['GET', 'POST'])  
def upload_file():  

        # 获取文件
    file = request.files['file']
        # 检测文件格式
   

            # 使用uuid生成唯一图片名
    first_name = str(uuid.uuid4())
            # 将 uuid和后缀拼接为 完整的文件名
    file_name = first_name + '.' + 'jpg'
            # 保存原图
    file.save(os.path.join(app.config['UPLOAD_FOLDER'], file_name))

    return file_name
    

    
@app.route('/addlist', methods=['GET', 'POST'])      
def addlist():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    
    
    name = request.values.get("name")
    img_src = request.values.get("img_src")
    
    cursor.execute("insert into que_list(name,img_src) values(%s,%s)",(name,img_src))
    
    
    db.commit()
	
	
	
    return "200"
    
    

@app.route('/addexcel', methods=['GET', 'POST'])   
def excel():
    db = MySQLdb.connect(host=host, user=user, passwd=password, db=database)
    cursor = db.cursor()
    
    
    file = request.files['file']
    
    list_id = request.values.get("list_id")
    

    
    df = pd.read_excel(file)
    
   
    
    
     
     
    for i in df.index.values:
        que = str(df.iloc[i]["que"])
        a = str(df.iloc[i]["a"])
        b = str(df.iloc[i]["b"])
        c = str(df.iloc[i]["c"])
        d = str(df.iloc[i]["d"])
        ans = str(df.iloc[i]["ans"])
        
        
        if(ans == 'a'):
            ans = '0'
        elif(ans == 'b'):
            ans = '1'
        elif(ans == 'c'):
            ans = '2'
        else:
            ans = '3'
   
        
        
        
        cursor.execute("REPLACE into que(que,list_id,a,b,c,d,ans) values(%s,%s,%s,%s,%s,%s,%s)",(que,list_id,a,b,c,d,ans,))
        
        db.commit()
        
    
        
        
        
        
        
        
        
       
  
    return "200"
        
        
        

    
    
    
    

    
		
	
    
if __name__ == '__main__':  
    app.run(host='0.0.0.0',port=5000,debug=True)