<template>
  <div id='contact'>
    <div class='container'>
      <div class="title header">
  			<h1>Contact</h1>
  			<h3>Contact is altijd fijn</h3>
  		</div>
      <div class='contact'>
        <form>
          <div class='field'>
            <label for='email' class='label'>Jouw <b>email:</b></label>
            <input id='email' class='input' autofocus>
          </div>

          <div class='field'>
            <label for='name' class='label'>Jouw <b>naam:</b></label>
            <input id='name' class='input'>
          </div>

          <div class='field'>
            <label for='message' class='label'>Jouw <b>bericht:</b></label>
            <textarea id='message' class='input'/>
          </div>

          <div class='btns'>
            <a class='btn' type='submit'>Verstuur</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Contact',

    data () {
      return {
        msg: 'contact'
      }
    }
  }
</script>
