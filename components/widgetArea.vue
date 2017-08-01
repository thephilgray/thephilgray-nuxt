<template lang="pug">
  aside.wiget-area
    header.widget-header
      img.avatar(src="~assets/avatar400x400.png")
    section.widget-content
      p
        strong Phil Gray
      ul.skills
        li UI
        li Front-end
        li Design
        li Development
        li Copywriting
        li Documentation
      p 30/M/US
      p @thephilgray
</template> 
<style lang="scss" scoped>
      .wiget-area {
    background: rgba(250,207,215,.5);
    text-align: center;
}
  .widget-content {
    background: #C2EAE9;
    width: 100%;
    padding: 1em;
  }
  .avatar{
    border-radius: 50%;
    margin: .5em 0;
    @media screen and (min-width: 480px){
          margin-top: -50px;
    }
  }
  .skills{
    list-style: none;
    margin: 1em 0;
    padding: 0;
  }
  
</style>
