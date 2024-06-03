let Users=[
        {name:"坂口雄紀",pass:3271},
        {name:"津山拓実",pass:5498},
        {name:"仙波広翔",pass:9012},
        {name:"児島諄",pass:7890},
        {name:"足立",pass:4561},
        {name:"小松崎友斗",pass:9012},
        {name:"杉浦如雲",pass:2319},
        {name:"馬緤晃大",pass:9304},
        {name:"籔史堂",pass:8901},
        {name:"志村幸祐",pass:7430},
        {name:"相澤学斗",pass:4028},
        {name:"山田悠一都",pass:5463},
        {name:"河野ゆま",pass:0465},
        {name:"水谷あさひ",pass:7485},
        {name:"鏑木大稀",pass:0846},
        {name:"三澤千尋",pass:8304},
        {name:"元重翔乃介",pass:4829},
        {name:"大館拓史",pass:1092},


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
