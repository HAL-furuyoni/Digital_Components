//----------------------------------------------------------------------------
//Declare variables
//----------------------------------------------------------------------------
var Sakura = []; //Sakura crystle
var cards = [];  //hands & deck
var vigor = [];  //vigor
var recoil = [];
var Component = []; // Components
var thd_dist = 2; // Threshold of distance
//----------------------------------------------------------------------------
//functions
//----------------------------------------------------------------------------
function get_fields(_player,_resource,_num){
  this.player = _player;
  this.resource = _resource;
  this.num = _num;
}
//----------------------------------------------------------------------------
function disp(tar){
  for (var i = 0; i < tar.length; i++) {
    target = document.getElementById(tar[i].player
      +'_'+tar[i].resource);
      target.innerHTML = tar[i].num;
    }
  }
//----------------------------------------------------------------------------
function init() {
  Sakura[0] = new get_fields('A','aura',3);
  Sakura[1] = new get_fields('A','flare',0);
  Sakura[2] = new get_fields('A','life',10);
  Sakura[3] = new get_fields('B','aura',3);
  Sakura[4] = new get_fields('B','flare',0);
  Sakura[5] = new get_fields('B','life',10);
  Sakura[6] = new get_fields('C','dist',10);
  Sakura[7] = new get_fields('C','dust',0);
  disp(Sakura);
  Component[0] = new get_fields('A','umbrella',0);
  Component[1] = new get_fields('A','tact',1);
  Component[2] = new get_fields('A','fuel',5);
  Component[3] = new get_fields('A','raijin',0);
  Component[4] = new get_fields('A','fujin',0);
  Component[5] = new get_fields('B','umbrella',0);
  Component[6] = new get_fields('B','tact',1);
  Component[7] = new get_fields('B','fuel',5);
  Component[8] = new get_fields('B','raijin',0);
  Component[9] = new get_fields('B','fujin',0);
  //disp(Component);
  card[0] = new get_fields('A','hands',3);
  card[1] = new get_fields('A','deck',4);
  card[2] = new get_fields('B','hands',3);
  card[3] = new get_fields('B','deck',4);
  disp(card);
  vigor[0] = new get_field('A','vigor',0);
  vigor[1] = new get_field('B','vigor',1);
  disp(vigor);
};
//----------------------------------------------------------------------------
//Basic Action
//----------------------------------------------------------------------------
function go(_player){
  var dist = Sakura[6].num;
  if(dist > thd_dist){
    if(_player == 'A'){
      if(Sakura[0].num == 5){alert('前進できません')}
      else{
        Sakura[6].num--;
        Sakura[0].num++;
      }
    }
    else{
      if(Sakura[3].num == 5){alert('前進できません')}
      else{
        Sakura[6].num--;
        Sakura[3].num++;
      }
    }
  disp(Sakura);
  }
  else{
    alert('間合は2以下です。前進できません');
  }
}
//------------------------------------------------------------------------------
function back(_player){
  var dist = Sakura[6].num;
  if(dist < 10){
    if(_player == 'A'){
      if(Sakura[0].num == 0){alert('後退できません')}
      else{
        Sakura[6].num++;
        Sakura[0].num--;
      }
    }
    else{
      if(Sakura[3].num == 0){alert('後退できません')}
      else{
        Sakura[6].num++;
        Sakura[3].num--;
      }
    }
  disp(Sakura);
  }
  else{
    alert('間合は10です。後退できません');
  }
}
//------------------------------------------------------------------------------
function matoi(_player){
  var dust = Sakura[7].num;
  if(dust > 0){
    if(_player == 'A'){
      if(Sakura[0].num == 5){alert('纏えません')}
      else{
        Sakura[7].num--;
        Sakura[0].num++;
      }
    }
    else{
      if(Sakura[3].num == 5){alert('纏えません')}
      else{
        Sakura[7].num--;
        Sakura[3].num++;
      }
    }
  disp(Sakura);
  }
  else{
    alert('ダストが枯れています!!!纏えません!');
  }
}
//------------------------------------------------------------------------------
function yadosi(_player){
  if(_player == 'A'){
    if(Sakura[0].num == 0){alert('宿せません')}
    else{
      Sakura[1].num++;
      Sakura[0].num--;
    }
  }
  else{
    if(Sakura[3].num == 0){alert('宿せません')}
    else{
      Sakura[4].num++;
      Sakura[3].num--;
    }
  }
  disp(Sakura);
}
//------------------------------------------------------------------------------
function ridatu(){
  var dist = Sakura[6].num;
  var dust = Sakura[7].num;
  if(dist <= thd_dist){
    if(dust > 0){
      Sakura[7].num--;
      Sakura[6].num++;
    }
    else{
      alert('ダストが枯れています!!!離脱できません!');
    }
  disp(Sakura);
  }
  else{
    alert('離脱できません!');
  }
}
