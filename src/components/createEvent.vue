<template>
  <div class="container">
    <form>
      <div class="well">
        <h4>Add Event</h4>
        <div class="form-group">
          <label class="pull-left">Title</label>
          <input type="text" class="form-control" placeholder="Title" v-model="Event.title">
        </div>
        <div class="form-group">
          <label class="pull-left">Date From</label>
          <input type="text" class="form-control" placeholder="Date From" v-model="Event.date_from">
        </div>
        <div class="form-group">
          <label class="pull-left">Date To</label>
          <input type="text" class="form-control" placeholder="Date To" v-model="Event.date_to">
        </div>
        <div class="form-group">
          <label class="pull-left">Location</label>
          <input type="text" class="form-control" placeholder="Location" v-model="Event.location">
        </div>
        <div class="form-group">
          <label class="pull-left">Description</label>
          <input type="text" class="form-control" placeholder="Description" v-model="Event.description">
        </div>
        <button type="submit" class="btn btn-large btn-block btn-primary full-width" @click="addToAPI">Create Event</button>
        <router-link to="/events">
        <button class="btn btn-large btn-block btn-success full-width">View Events</button>
        </router-link>
      </div>
    </form>

  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'createEvent',
  data() {
    return {
      Event: { title: '', date_from: '', date_to: '', location: '', description: '' },

    }
  }, methods: {
    addToAPI() {

      let newEvent = {
        title: this.Event.title,
        date_from: this.Event.date_from,
        date_to: this.Event.date_to,
        location: this.Event.location,
        description: this.Event.description,

      }
      console.log(newEvent);
      axios.post('http://localhost:3000/events', newEvent)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);

      });

    }


  }
}
</script>

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
