<template>

  <div class="container">
      <h1>Get User</h1>


      <table class="table table-striped table-borderes">
      <thead>
        <tr>
          <th class="center">Title</th>
          <th class="center">Date From</th>
          <th class="center">Date To</th>
          <th class="center">Location</th>
          <th class="center">Details</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="event_alias in Event">
          <td class="text-left"> {{ event_alias.title}}</td>
          <td class="text-left"> {{ event_alias.date_from}}</td>
          <td class="text-left"> {{ event_alias.date_to}}</td>
          <td class="text-left"> {{ event_alias.location}}</td>
          <td class="text-left"> {{ event_alias.details}}</td>
        </tr>
      </tbody>
    </table>
<router-link to="/">
    <button class="brn btn-large btn-block btn-success full-width">Add Event</button>
</router-link>
      </div>
</template>

<script>

import axios from 'axios';
export default {
    name:'event',
    data() {
        return {
            Event: [],

        }
    },

        mounted() {
        axios.get('http://localhost:3000/events')
            .then((response) => {
                console.log(response.data);
                this.Event = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },

}
</script>

<style>
