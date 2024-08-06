/* Zadanie 3. Profil gracza */

const profile = {
    username: "Jacob",
    playTime: 300,
  
    changeUsername(newName) {
      this.username = newName;
    },
  
    updatePlayTime(hours) {
      this.playTime += hours;
    },
  
    getInfo() {
      return `${this.username} has ${this.playTime} active hours!`;
    }
  };
  
  console.log(profile.getInfo()); 
  
  profile.changeUsername("Marco");
  console.log(profile.getInfo()); 
  
  profile.updatePlayTime(20);
  console.log(profile.getInfo()); 


  /*
        Jacob has 300 active hours!
VM104:23 Marco has 300 active hours!
VM104:26 Marco has 320 active hours!
undefined */