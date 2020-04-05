<template>
<!-- <div> -->
  <TheNavBar></TheNavBar>
  <div class="vasion-card" v-if="showAddContact">
    <h3 class="title">New Contact</h3>
    <img class="vue-logo" src="./assets/images/logo.png">
    <h1>Hello Vue 3!</h1>
    <button @click="setPageState('showContactsList')">BACK</button>
    <button @click="addNewContact">ADD</button>
  </div>
  <div class="vasion-card" v-if="showContactsList">
    <ul>
      <li v-for="(contact, index) in contacts.list" :key="index">
        <div class="line-item">
          <div class="name-group">
            <span>{{contact.firstName}}</span>
            <span>{{contact.lastName}}</span>
          </div>
          <span>{{contact.phoneNumber}}</span>
          <span>{{contact.emailAddress}}</span>
          <div class="address-group">
            <span>{{contact.address.lineOne}}</span>
            <span>{{contact.address.linetwo}}</span>
            <span>{{contact.address.city}}</span>
            <span>{{contact.address.state}}</span>
            <span>{{contact.address.zip}}</span>
          </div>
        </div>
      </li>
    </ul>
    <button @click="setPageState('showAddContact')">ADD NEW</button>
  </div>
<!-- </div> -->
</template>

<script>
import { ref, reactive, computed } from 'vue'
import TheNavBar from './views/TheNavBar.vue'

export default {
  setup() {
    // Dynamic Paage State Setup
    let pageState = ref('showContactsList')
    const showAddContact = computed(() => pageState.value === 'showAddContact')
    const showContactsList = computed(() => pageState.value === 'showContactsList')
    const setPageState = newState => pageState.value = newState
    // Display Contacts
    const contacts = reactive({
      list: [
        {
          firstName: 'Steve',
          lastName: 'Price',
          phoneNumber: '509-540-6154',
          emailAddress: 'steve.price@gmail.com',
          address: {
            lineOne: '123 Main Street',
            linetwo: '',
            city: 'Burley',
            state: 'ID',
            zip: '84302',
          },
        }
      ]
    })

    // Create Contacts
    const newContact = reactive({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      emailAddress: '',
      address: {
        lineOne: '',
        linetwo: '',
        city: '',
        state: '',
        zip: '',
      },
    })

    // console.log('newContact', newContact.firstName)

    const addNewContact = contact => {
      console.log('running addContact ', contact)
      contacts.list.push(contact)
      console.log('contacts', contacts)
    }

    return {
      addNewContact,
      contacts,
      newContact,
      setPageState,
      showAddContact,
      showContactsList,
    }
  },
  components: {
    TheNavBar,
  }
}
</script>

<style scoped>
  .vue-logo {
    width: 200px;
  }
  h1 {
    font-family: Arial, Helvetica, sans-serif;
  }
  .line-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .vasion-card {
    width: 1000px;
    min-height: 422px;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(22, 23, 24, 0.15);
    z-index: 3000;
    margin: 0 auto;
    margin-top: 74px;
    background-color: white;
    display: flex;
    padding: 40px;
    flex-direction: column;
  }
</style>
