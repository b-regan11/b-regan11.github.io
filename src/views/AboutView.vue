import /
<template>
  <div class="container">
    <div class="about">
      <h2>About Me</h2>
    </div>
    <div class="headshot_container">
      <img class="headshot" src="../assets/Headshots/LinkedInHeadshot.jpg" alt="Bill Regan">
    </div>
    <div class="text_container">
        <h1 class="name">William "Bill" Regan</h1>  
        <p class="bio_text">
            I'm a graduate student based out of Orange, Connecticut. I'm passionate about working in data analysis and process optimization. I hold a Bachelor's of Science in Industrial Engineering with a minor in Computer Science from Quinnipiac University. 
            Through my professional and academic journey, I've established a strong foundation in Python, Java, and Microsoft Excel, along with proficiency in MySQL, HTML, JavaScript, and CSS. I'm open to connecting, please reach out!
        </p>
        <p class="communication">
          Phone: 203 - 747 - 0084
          <br>
          Email: regan.william11@gmail.com
          <br>
          LinkedIn: <a href="https://www.linkedin.com/in/williamaregan/">www.linkedin.com/in/williamaregan/</a>
        </p>
    </div>
  </div>
</template>

<style>

.headshot {
    border-radius: 10%;
    width: 350px;
    height: 450px;
}
.container {
  display: grid;
  grid-column: auto auto;
  /* background-color:#e6b8b8; */
  border-radius: 10%;
}
.about {
  display: grid;
  grid-column: auto;
}

</style>


