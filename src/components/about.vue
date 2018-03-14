<template>
    <div>
        <div id="about-content">
            <h1 id="about-title">About</h1>
            <div id="about-text">
                <p>Blake and Kalin are two beautiful men out to make the world a better place.</p>
                <p>Blake is a beautiful man that grew up near Chicago. He's gorgeous. He has a hot wife, he studies Chemical Engineering, and he knows how to be freakin' awesome.</p>
                <p>Kalin is hot, sexy beast. He grew up near Philly. He's manly. His wife is a total babe, he studies Computer Science, and he like to party.</p>
            </div>
        </div>

        <div id="follow-info">
            <div id="left-div"></div>
            <div id="middle-div">
                <p>Follow</p>
                <p>Blake and Kalin</p>
                <ul id="social_media_list">
                    <li><a href="https://www.facebook.com/blakeandkalin/" target="_blank" class="fa fa-facebook"></a></li>
                    <li><a href="https://www.instagram.com/blakeandkalin/" target="_blank" class="fa fa-instagram"></a></li>
                    <li><a href="https://www.youtube.com/channel/UCme2qt9YZP61-IyShrBlZXg/featured?view_as=subscriber" target="_blank" class="fa fa-youtube"></a></li>
                    <li><a href="https://twitter.com/blakeandkalin" target="_blank" class="fa fa-twitter"></a></li>
                </ul>
            </div>
            <div id="right-div"></div>
        </div>
    </div>
</template>


<style scoped>
#about-title {
    text-align: center;
    font-family: 'Rammetto One', cursive;
    font-size: 45px;
}

#about-content {
    margin: 240px 0 200px 0;
}

#about-text p {
    font-family: 'Rammetto One', cursive;
    margin: 20px 17%;
}


#follow-info {
    margin: 100px 0 0 0;
}

#left-div {
    width: 25%;
    height: 400px;
    float: left;
    background: url(../assets/blake.jpg) no-repeat center;
    background-size: cover;
}

#middle-div {
    background-color: #f9f9f9;
    width: 50%;
    text-align: center;
    height: 400px;
    float: left;
}

#middle-div p:nth-of-type(1) {
    color: #000;
    font-family: 'Anton', sans-serif;
    margin-bottom: 0;
    font-size: 40px;
}
#middle-div p:nth-of-type(2) {
    color: #000;
    font-family: 'Anton', sans-serif;
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 65px;
}

#right-div {
    width: 25%;
    height: 400px;
    float: left;
    background: url(../assets/cajon.jpg) no-repeat center;
    background-size: cover;
}


.fa {
    padding: 20px;
    font-size: 18px;
    width: 15px;
    height: 15px;
    text-align: center;
    text-decoration: none;
    border-radius: 50%;
    float: left;
}


.fa:hover {
    opacity: 0.7;
}

.fa-facebook {
    background: #000;
    color: white;
    background-size: contain;
}

.fa-instagram {
    background: #000;
    color: white;
}

.fa-snapchat-ghost {
    background: #000;
    color: white;
    /* text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; */
}

.fa-youtube {
    background: #000;
    color: white;
}

.fa-twitter {
    background: #000;    
    color: white;
}

#social_media_list {
    list-style-type: none;
    display: inline;
    -webkit-padding-start: 0 !important;
}

#social_media_list > li {
    display: inline-block !important;
    margin: 5px;
}
</style>
