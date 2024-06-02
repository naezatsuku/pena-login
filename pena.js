let Users=[
        {name:"a",pass:1},
        {name:"b",pass:2},
        {name:"c",pass:3},
        {name:"d",pass:4},
        {name:"e",pass:5},
        {name:"f",pass:6},

    ];
    let hantei="no";
    for(let i=0;i<Users.length;i++){
        let target=Users[i];
        let name=target.name;
        let pass=target.pass;
        localStorage.setItem(name,pass);
        localStorage.setItem(pass,name);
        }
    function kakunin(){
        let UserName=document.getElementById("UserName").value;
        let UserPass=document.getElementById("UserPass").value;
        console.log("ログイン情報",UserName,UserPass);
        let pass=localStorage.getItem(UserName);
        let name=localStorage.getItem(UserPass);
       
        if(UserPass==pass&&UserName==name){
            console.log("Yes",UserPass,pass);
            //ログインできている時の処理
            const baseUrl="https://naezatsuku.github.io/pena/";
    let urlParameters={
        login:"Yes",
        UserName:UserName,

    };
    let url=baseUrl+"?"+Object.entries(urlParameters).map(([key,value])=>`${key}=${encodeURIComponent(value)}`).join("&");
    console.log(url);
    window.location.href =url;

        }else{
            console.log("No")
            window.alert("名前かパスワードがあっていません")
        }
        document.getElementById("UserName").value="";
        document.getElementById("UserPass").value="";

    }
