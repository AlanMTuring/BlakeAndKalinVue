<template>
    <div id="main">
        <h1 style="text-align: center; margin-top: 160px; font-size: 45px;">Set-Lists</h1>
        <p style="text-align: center; font-size: 25px; margin: auto 300px;">
            We want to play what you want us to! To give a suggestion, just put the song title and the artist in the boxes and hit add.
        </p>
        <p style="text-align: center; font-size: 20px;">
            The 'Wedding Set-List' is Blake and Kalin's standard setlist, but can be changed for individual weddings. Send them a message from the 'Contact' tab for your unique playlist.
        </p>
        <div class="container">
            <div class="wedding-setlist">
                <h2 style="text-align: center;">Wedding Set-List</h2>
                <ol>
                    <li><p>1234 - Plain White T's</p></li>
                    <li><p>Rhythm of Love - Plain White T's</p></li>
                    <li><p>Can't Help Falling in Love - Evlis Presley</p></li>
                    <li><p>I Won't Give Up - Jason Mraz</p></li>
                    <li><p>Lucky - Jason Mraz</p></li>
                    <li><p>I'm Yours - Jason Mraz</p></li>
                    <li><p>Like I'm Gonna Lose You - Meghan Trainor</p></li>
                    <li><p>All of Me - John Legend</p></li>
                    <li><p>Drops of Jupiter - Train</p></li>
                    <li><p>Marry Me - Train</p></li>
                    <li><p>Photograph - Ed Sheeran</p></li>
                    <li><p>Perfect - Ed Sheeran</p></li>
                    <li><p>Thinking Out Loud - Ed Sheeran</p></li>
                    <li><p>Can't Keep My Eyes Off of You - Frankie Valli</p></li>
                    <li><p>A Thousand Years - Christina Perri</p></li>
                    <li><p>Never Stop - SafetySuit</p></li>
                    <li><p>Say You Won't Let Go - James Arthur</p></li>
                    <li><p>Just the Way You Are - Bruno Mars</p></li>
                    <li><p>Bubbly - Colbie Caillet</p></li>
                    <li><p>Bless The Broken Road - Rascal Flatts</p></li>
                    <li><p>Better Together - Jack Johnson</p></li>
                    <li><p>She is Love - Parachute</p></li>
                    <li><p>The Way You Look Tonight - Fred Astaire</p></li>
                    <li><p>You and Me - Lifehouse</p></li>
                    <li><p>Two Little Words - Rueben Koops</p></li>
                    <li><p>Loving You Tonight - Andrew Allen</p></li>
                </ol>
            </div>
            <div class="wedding-setlist">
                <h2><button id="myBtn">Suggestions</button></h2>
                <form v-on:submit.prevent="addSong">
                    Song Title: <input type="text" v-model="title"><br>
                    Artist: <input type="text" v-model="artist"><br>
                    <button type="submit">Add</button>
                </form>
                <ul>
                    <li v-for="song in songs" draggable="true" v-on:dragstart="dragSong(song)" v-on:dragover.prevent v-on:drop="dropSong(song)">
                    <label>{{ song.title }} - {{ song.artist }}</label>
                         <button v-on:click="deleteSong(song)" class="delete" v-bind:class="{ editing: song.editing }">X</button>
                    </li>
                </ul>
            </div>
        </div>
        <div id="myModal" class="modal">
            <!-- Modal content -->
            <div class="modal-content">
                <span class="close">&times;</span>
                <p>To edit suggestions list, enter password:</p>
                <form v-on:submit.prevent="editPage">
                    <input type="password" v-model="password">
                    <button type="submit">Submit</button>
                </form>
                <p>{{ response }}</p>
            </div>
        </div>
    </div>
</template>


<script>
window.onload = function() { 
    // Get the modal
    var modal = document.getElementById('myModal');
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
export default {
  name: 'Setlist',
  data () {
    return {
      songs: [],
      title: '',
      artist: '',
      drag: {},
      password: '',
      editing: false,
      response: '',
    }
  },
  created: function() {
    this.getSongs();
  },
  computed: {
    // activeSongs: function() {
    //   return this.songs.filter(function(song) {
    //     return !song.completed;
    //   });
    // },
    filteredSongs: function() {
      // if (this.show === 'active')
      //   return this.songs.filter(function(song) {
      //     return !song.completed;
      //   });
      // if (this.show === 'completed')
      //   return this.songs.filter(function(song) {
      //     return song.completed;
      //   });
      return this.songs;
    },
  },
  methods: {
    getSongs: function() {
      axios.get("http://localhost:3002/api/songs").then(response => {
        this.songs = response.data;
        return true;
      }).catch(err => {
      });
    },
    addSong: function() {
      axios.post("http://localhost:3002/api/songs", {
        title: this.title,
        artist: this.artist,
        editing: this.editing,
      }).then(response => {
        this.title = "";
        this.artist = "";
        this.getSongs();
        return true;
      }).catch(err => {
      });
    },
    editPage: function() {
      if (this.password === "edit") {
        this.songs.forEach(song => {
          song.editing = true;
        });
        this.response = "Editing enabled. Delete one suggestion.";
      }
      else {
        this.response = "Incorrect password.";
      }
      this.password = '';
    },
    // completeSong: function(song) {
    //   axios.put("http://localhost:3002/api/songs/" + song.id, {
    //     text: song.text,
    //     priority: song.priority,
    //     completed: !song.completed,
    //     orderChange: false,
    //   }).then(response => {
    //     return true;
    //   }).catch(err => {
    //   });
    // },
    deleteSong: function(song) {
      axios.delete("http://localhost:3002/api/songs/" + song.id).then(response => {
        this.getSongs();
        this.response = '';
        return true;
      }).catch(err => {
      });
    },
    // showAll: function() {
    //   this.show = 'all';
    // },
    // showActive: function() {
    //   this.show = 'active';
    // },
    // showCompleted: function() {
    //   this.show = 'completed';
    // },
    // deleteCompleted: function() {
    //   this.songs.forEach(song => {
    //     if (song.completed)
    // this.deleteSong(song)
    //   });
    // },
    dragSong: function(song) {
      this.drag = song;
    },
    dropSong: function(song) {
      axios.put("http://localhost:3002/api/songs/" + this.drag.id, {
        title: this.drag.title,
        artist: this.drag.artist,
        orderChange: true,
        orderTarget: song.id
      }).then(response => {
        this.getSongs();
        return true;
      }).catch(err => {
      });
    },
  }
}
</script>



<style scoped>
#main {
  font-family: 'Pacifico', cursive;
}
.container {
    margin: 0;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    flex-direction: row;
}

ol {
  list-style-type: none;
  -moz-column-count: 2;
  -moz-column-gap: 20px;
  -webkit-column-count: 2;
  -webkit-column-gap: 20px;
  column-count: 2;
  column-gap: 20px;
}

.delete {
  display: none;
}

.editing {
  display: block;
}

.wedding-setlist {
    margin: 0 30px 0 30px;
}

#myBtn {
     background:none!important;
     color:inherit;
     border:none; 
     padding:0!important;
     font: inherit;
     /*border is optional*/
     /* border-bottom:1px solid #444;  */
     /* cursor: pointer; */
}

/* The Modal (background) */
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
    text-align: center;
}

/* The Close Button */
.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
</style>
