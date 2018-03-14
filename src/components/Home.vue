<template>
    <div>
        <div class="container">
            <div class="left-side">
                <h1>Wedding Singers</h1>
                <p>The Dynamic Duo can sing covers of your favorite artists live, at your wedding!</p>
            </div>
            <div class="right-side" style="background-color: #FFF;">
                <img src="../assets/mcentire-wedding-cropped.jpg" id="home-image" alt="Singin It Goooood">
            </div>
        </div>

        <div class="space"></div>

        <div class="container">
            <div class="left-side">
                <img src="../assets/mash-up.jpg" id="home-image" alt="Mash-Up">
            </div>
            <div class="right-side">
                <h1>Gigs and Parties</h1>
                <p>They know more than love songs. Contact them for background music or a sit-down performance!</p>
            </div>
        </div>


        <div class="space"></div>

        <div class="container" style="background-color: #f2f2f2;">
            <div class="left-side">
                <h1>Bestest Friends</h1>
                <p>You ain't seen a bromance til you seen them.</p>
            </div>
            <div class="right-side" style="background-color: #FFF;">
                <img src="../assets/temple.jpg" id="home-image" alt="Temple">
            </div>
        </div>

        <div class="space"></div>

    </div>
</template>



<style scoped>

.left-side {
    margin: 0 20px 0 15%;
}

.left-side h1 {
    font-family: 'Pacifico', cursive;
    text-align: center;
    font-size: 60px;
}

.left-side p {
    font-family: 'Pacifico', cursive;
    font-size: 30px;
}


.right-side {
    margin: 0 15% 0 20px;
}

.right-side h1 {
    font-family: 'Pacifico', cursive;
    text-align: center;
    font-size: 60px;
}

.right-side p {
    font-family: 'Pacifico', cursive;
    font-size: 30px;
}

#home-image {
    padding: 0;
    width: 100%;
    height: 100%;
    margin: 0;
}

.space {
    height: 200px;
    background: url(../assets/me.jpg) no-repeat center fixed; 
    background-size: cover;
}
</style>