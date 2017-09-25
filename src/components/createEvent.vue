<template>
  <div class="container">
    <form>
      <div class="well">
        <h4>Add Event</h4>
        <div class="form-group">
          <label class="pull-left">Title</label>
          <input type="text" class="form-control" placeholder="Title">
        </div>
        <div class="form-group">
          <label class="pull-left">Date From</label>
          <input type="text" class="form-control" placeholder="Date From">
        </div>
        <div class="form-group">
          <label class="pull-left">Date To</label>
          <input type="text" class="form-control" placeholder="Date To">
        </div>
        <div class="form-group">
          <label class="pull-left">Location</label>
          <input type="text" class="form-control" placeholder="Location">
        </div>
        <div class="form-group">
          <label class="pull-left">Description</label>
          <input type="text" class="form-control" placeholder="Description">
        </div>
        <button type="submit" class="btn btn-large btn-block btn-primary full-width">Create Event</button>
        <button class="btn btn-large btn-block btn-success full-width">View Events</button>
      </div>
    </form>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
