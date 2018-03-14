<template>
    <div>
        <h1 style="text-align: center; margin-top: 160px;">Set-Lists</h1>
        <p style="text-align: center;">
            We want to play what you want us to! To give a suggestion, just put the song title and the artist in the boxes and hit add.
        </p>
        <div class="container">
            <div id="wedding-setlist">
                <h2>Wedding Set-List</h2>
                <form v-on:submit.prevent="addSong">
                    Song Title: <input type="text" v-model="song"><br>
                    Artist: <input type="text" v-model="artist"><br>
                    <button type="submit">Add</button>
                </form>
                <ul>
                    <li v-for="song in filteredSongs" draggable="true" v-on:dragstart="dragSong(song)" v-on:dragover.prevent v-on:drop="dropSong(song)">
                    <input type="checkbox" v-model="song.completed" v-on:click="completeSong(song)" />
                    <label v-bind:class="{ completed: song.completed }">{{ song.text }}&nbsp;&nbsp;&nbsp;--Priority: {{ song.priority }}</label>
                         <button v-on:click="raisePriority(song)">Raise Priority</button>
                         <button v-on:click="lowerPriority(song)">Lower Priority</button>
                         <button v-on:click="deleteSong(song)" class="delete">X</button>
                    </li>
                </ul>
            </div>
            <div>
                <h2>Gig Set-List</h2>
                <ol>
                    <li><p>Love Yourself - Justin Bieber</p></li>
                    <li><p>Scandalous - Kalin Nelson</p></li>
                    <li><p>Boyfriend - Just Bieber</p></li>
                </ol>
            </div>
        </div>
    </div>
    <!--



        -->
</template>



<style scoped>

</style>
