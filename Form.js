/*class Form{
    constructor(){
        this.button1 = createButton('SIGN IN');
        this.button2 = createButton('SIGN UP');
        this.button3 = createButton('GUEST');
        this.title = createElement('h1')
        this.email = createInput('Email id')
        this.phoneno = createInput('Phone No')
        this.age = createInput('Age')
              this.name = createInput('Name')
        this.greeting = createElement('h2')

    }
    display(){
      
this.title.html("RELAX-O-METER")
this.title.position(displayWidth/2,0)
this.button1.position(displayWidth/2+100,displayHeight/2)
this.button2.position(displayWidth/2+100,displayHeight/2+50)
this.button3.position(displayWidth/2+100,displayHeight/2+100)

//SIGN UP
this.button2.mousePressed(()=>{
    this.button1.hide();
    this.button2.hide();
    this.button3.hide();
    this.name.position(displayWidth/2,displayHeight-500);
    this.email.position(displayWidth/2,displayHeight-450);
    this.phoneno.position(displayWidth/2,displayHeight-400);
    this.age.position(displayWidth/2,displayHeight-350);
      var submit = createButton('SUBMIT')
    submit.position(displayWidth/2,displayHeight-200)
    submit.mousePressed(()=>{
        var username = this.name.value();

      this.name.hide();
        this.email.hide();
        this.phoneno.hide();
        this.age.hide();
        submit.hide();
        this.greeting.html("Hello! " + username +  " Welcome to RELAX-0-METER")
        this.greeting.position(displayWidth/2-200,displayHeight/2)
       
    })

})

//SIGN IN
this.button1.mousePressed(()=>{
    this.button1.hide();
    this.button2.hide();
    this.button3.hide();
   
    var name = createInput("Name")
    var password = createInput("Password")
    name.position(displayWidth/2,displayHeight/2)
    password.position(displayWidth/2,displayHeight/2+50)
    var submit = createButton('SUBMIT')
    submit.position(displayWidth/2,displayHeight/2+150)
    submit.mousePressed(()=>{
        var username = name.value();

        name.hide();
        password.hide();
        submit.hide();
        this.greeting.html("Hello! " + username +  " Welcome Back")
        this.greeting.position(displayWidth/2,displayHeight/2)
       var cont= createButton('CONTINUE')
       cont.position(displayWidth/2,displayHeight/2+100)
       cont.mousePressed(()=>{
      gameState=1
       })

    })
})
//GUEST
this.button3.mousePressed(()=>{
    this.button1.hide();
    this.button2.hide();
    this.button3.hide();
    this.greeting.html('Hello Guest! Welcome to RELAX-O-METER')
    this.greeting.position(displayWidth/2,displayHeight/2)
    
})
    }
}*/
class Form {
    constructor() {
      
    }
  
    display(){
      background(bgImg)
      image(title,displayWidth/2-50,500,500)
      
      var button1 = createButton('SIGN UP');
      var button2 = createButton('SIGN IN');
      var button3 = createButton('GUEST');
      
     
      button1.position(displayWidth/2, displayHeight/2);
      button1.size(130, 30);
      button2.position(displayWidth/2, displayHeight/2+50);
      button2.size(130, 30);
      button3.position(displayWidth/2, displayHeight/2+100);
      button3.size(130, 30);
  //SIGN UP
      button1.mousePressed(function(){
       
        button1.remove();
        button2.remove();
        button3.remove();
        var Name = createInput("Name");
        var email = createInput("email");
        var phone = createInput("Phone no");
        var password = createInput("password");
       
        var submit = createButton('SUBMIT');
        Name.position(displayWidth/2, displayHeight/2);
        email.position(displayWidth/2, displayHeight/2+50);
        phone.position(displayWidth/2, displayHeight/2+100);
        password.position(displayWidth/2, displayHeight/2+150);
        submit.position(displayWidth/2+20, displayHeight/2+200);
        submit.size(130, 30);
        submit.mousePressed(function(){
       
          Name.hide();
          email.hide();
          phone.hide();
          password.hide();
          submit.hide();
          var username = Name.value();
          var greeting = createElement('h2');
          var con= createButton('CONTINUE');
          greeting.html("Hello! " + username +  " Welcome to RELAX-0-METER")
          greeting.position(displayWidth/2-100, displayHeight/2-100)
          con.position(displayWidth/2+50, displayHeight/2);
          con.mousePressed(()=>{
           
            con.hide();
            greeting.hide();
            gameState=1;
          })
        });
       
      });
      //SIGN IN
      button2.mousePressed(function(){
       
        button1.hide();
        button2.hide();
        button3.hide();
        var Name1 = createInput("Name");
        var email1 = createInput("email");
        var password1 = createInput("Password");
        
        var submit1 = createButton('SUBMIT');
       
        Name1.position(displayWidth/2, displayHeight/2);
        email1.position(displayWidth/2, displayHeight/2+50);
        password1.position(displayWidth/2, displayHeight/2+100);
        submit1.position(displayWidth/2+20, displayHeight/2+200);
        submit1.size(130, 30);
        submit1.mousePressed(function(){
       
        Name1.hide();
          email1.hide();
         
          password1.hide();
          submit1.hide();
          var name = Name1.value();
          var con= createButton('CONTINUE');
          var greeting = createElement('h2');
          greeting.html("Hello! " + name +  " Welcome Back to RELAX-0-METER" )
          greeting.position(displayWidth/2-150, displayHeight/2)
          con.position(displayWidth/2+50, displayHeight/2+90);
          con.mousePressed(()=>{
           
            con.hide();
            greeting.hide();
            gameState=1;
          })
        });
       
      });
      button3.mousePressed(function(){
       
        button1.hide();
        button2.hide();
        button3.hide();
       
         var greeting = createElement('h3');
         var con=createButton('CONTINUE')
        greeting.html("Hello!! Welcome to RELAX-0-METER")
        greeting.position(displayWidth/2-50, displayHeight/2)
        con.position(displayWidth/2+50, displayHeight/2);
        con.mousePressed(()=>{
         
          con.hide();
          greeting.hide();
          gameState=1;
        })
      });
  
  
    }
  }
  