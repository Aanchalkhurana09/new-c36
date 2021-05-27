class Game{
    constructor()
    {
    }
   getState()
   {
       var gameStateRef=database.ref('gameState');
       gameStateRef.on("value",function(data)    //anonymous function, function ka name ni diya
       {
     gameState=data.val()
       })
   }
    update(state) //argument
    {
        database.ref('/').update({
            gameState:state
        });
    }

   start()
   {
       if(gameState===0)
       {
           player= new Player();
           player.getCount();
           form = new Form()
           form.display();
       }
   }

    }
