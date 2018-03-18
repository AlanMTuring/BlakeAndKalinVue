<template>
    <div>
        <h1 id="title">Contact</h1>
        <div id="order-text">
            <p>To book a gig, ask questions, or just send fan-mail to Blake and Kalin, fill out the form below and they will get back to you.</p>
        </div>

        <div style="background-color: #f3f3f3; padding: 30px 30px;">
            <form action="https://formspree.io/kalinjaynelson@gmail.com" method="POST" target="_blank">
                <div >
                    <input type="text" placeholder="Full Name" name="Name" required />
                    <input type="tel" placeholder="Phone Number" name="Phone" id="phonenumber" />
                    <input type="email" placeholder="Email" name="email" required />
                    <textarea name="Message" type="text" placeholder="Message"></textarea>
                    <input type="submit" value="Submit" style="margin-bottom: 15px; font-size: 24px; letter-spacing: 3px; color: white;">
                </div>
            </form>
        </div>
    </div>
</template>


<style scoped>
#title {
    margin-top: 160px;
    text-align: center;
    font-family: 'Pacifico', cursive;
    font-size: 45px;
}

#order-text {
    text-align: center;
    color: #000;
    font-family: 'Pacifico', cursive;
    font-size: 28px;
    margin: auto 300px 30px 300px;
}


form {
    max-width: 1000px;
    text-align: center;
    margin: auto auto;
}

form input, form textarea, form select, form select option {
    border: 0;
    outline: 0;
    border-radius: 3px;
    padding: 5px;
    display: block;
    width: 100%;
    margin-top: 2px;
    font-size: 18px;
    line-height: 28px;
    color: #999999;
}

form select {
    height: 38px;
    background: white;
}

textarea {
    max-width: 100%;
}

form input[type='submit'] {
    margin: 5px auto;
    width: 30%;
}

.g-recaptcha > div {
    margin: 15px auto;
}
.g-recaptcha > div > div {
    height: 92px;
}

::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    #939597;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color:    #939597;
   opacity:  1;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:    #939597;
   opacity:  1;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
   color:    #939597;
}
::-ms-input-placeholder { /* Microsoft Edge */
   color:    #939597;
}
</style>
