// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: {
    songs: [],
    text: '',
    priority: '',
    show: 'all',
    drag: {},
  },
  created: function() {
    this.getSongs();
  },
  computed: {
    activeSongs: function() {
      return this.items.filter(function(song) {
             return !song.completed;
      });
    },
    filteredSongs: function() {
      if (this.show === 'active')
        return this.items.filter(function(song) {
          return !song.completed;
        });
      if (this.show === 'completed')
        return this.items.filter(function(song) {
          return song.completed;
        });
      return this.items;
    },
  },
  methods: {
    getSongs: function() {
      axios.get("http://localhost:3002/api/songs/").then(response => {
        this.items = response.data;
        return true;
      }).catch(err => {
      });
    },
    addSong: function() {
      if (this.priority < 1 || this.priority > 3) {
        this.priority = 3;
      }
      axios.post("http://localhost:3002/api/songs/", {
        text: this.text,
        priority: this.priority,
        completed: false
      }).then(response => {
        this.text = "";
        this.priority = "";
        this.getSongs();
        return true;
      }).catch(err => {
      });
    },
    completeSong: function(song) {
      axios.put("http://localhost:3002/api/songs/" + song.id, {
        text: song.text,
        priority: song.priority,
        completed: !song.completed,
        orderChange: false,
      }).then(response => {
        return true;
      }).catch(err => {
      });
    },
    deleteSong: function(song) {
      axios.delete("http://localhost:3002/api/songs/" + song.id).then(response => {
        this.getSongs();
        return true;
      }).catch(err => {
      });
    },
    raisePriority: function(song) {
      if (song.priority !== 1) {
        song.priority--;
      }
      axios.put("http://localhost:3002/api/songs/" + song.id, {
        text: song.text,
        priority: song.priority,
        completed: song.completed,
        orderChange: false,
      }).then(response => {
        return true;
      }).catch(err => {
      });
    },
    lowerPriority: function(song) {
      if (song.priority !== 3) {
        song.priority++;
      }
      axios.put("http://localhost:3002/api/songs/" + song.id, {
        text: song.text,
        priority: song.priority,
        completed: song.completed,
        orderChange: false,
      }).then(response => {
        return true;
      }).catch(err => {
      });
    },
    showAll: function() {
      this.show = 'all';
    },
    showActive: function() {
      this.show = 'active';
    },
    showCompleted: function() {
      this.show = 'completed';
    },
    deleteCompleted: function() {
      this.items.forEach(song => {
        if (song.completed)
    this.deleteSong(song)
      });
    },
    sortByPriority: function() {
      this.items.sort(function(a,b) {
        if (a.priority > b.priority) {
          return 1;
        }
        if (a.priority < b.priority) {
          return -1;
        }
        return 0;
      });
    },
    dragSong: function(song) {
      this.drag = song;
    },
    dropSong: function(song) {
      axios.put("http://localhost:3002/api/songs/" + this.drag.id, {
        text: this.drag.text,
        priority: this.drag.priority,
        completed: this.drag.completed,
        orderChange: true,
        orderTarget: song.id
      }).then(response => {
        this.getSongs();
        return true;
      }).catch(err => {
      });
    },
  },
});
