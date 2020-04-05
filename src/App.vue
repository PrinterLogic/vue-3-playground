<template>
<!-- <div> -->
  <TheNavBar></TheNavBar>
  <div class="vasion-card" v-if="showAddContact">
    <h2 class="title">New Contact</h2>
    <form></form>
    <div class="input-group">
      <label for="firstName">First Name</label>
      <input id="firstName" type="text" v-model="newContact.firstName">
    </div>
    <div class="input-group">
      <label for="lastName">Last Name</label>
      <input id="lastName" type="text" v-model="newContact.lastName">
    </div>
    <div class="input-group">
      <label for="phoneNumber">Phone Number</label>
      <input id="phoneNumber" type="text" v-model="newContact.phoneNumber">
    </div>
    <div class="input-group">
      <label for="emailAddress">Email Address</label>
      <input id="emailAddress" type="text" v-model="newContact.emailAddress">
    </div>
    <div class="input-group">
      <label for="addressLineOne">Line One</label>
      <input id="addressLineOne" type="text" v-model="newContact.address.lineOne">
    </div>
    <div class="input-group">
      <label for="lineTwo">Line Two</label>
      <input id="lineTwo" type="text" v-model="newContact.address.lineTwo">
    </div>
    <div class="input-group">
      <label for="city">City</label>
      <input id="city" type="text" v-model="newContact.address.city">
    </div>
    <div class="input-group">
      <label for="state">State</label>
      <input id="state" type="text" v-model="newContact.address.state">
    </div>
    <div class="input-group">
      <label for="zip">Zip</label>
      <input id="zip" type="text" v-model="newContact.address.zip">
    </div>
    <button @click="setPageState('showContactsList')">BACK</button>
    <button @click="addNewContact(newContact)">ADD</button>
  </div>
  <div class="vasion-card" v-if="showContactsList">
    <h2>Contacts</h2>
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
            <span>{{contact.address.lineTwo}}</span>
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
const defaultContact = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
    address: {
      lineOne: '',
      lineTwo: '',
      city: '',
      state: '',
      zip: '',
    },
  }

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
    const defaultContactCopy = Object.assign({}, defaultContact)
    let newContact = reactive(defaultContactCopy)

    // console.log('newContact', newContact.firstName)

    const addNewContact = contact => {
      contacts.list.push({...contact, address: { ...contact.address } })
      console.log('defaultContact: ', defaultContact)
      newContact = Object.assign({}, defaultContact)
      pageState.value = 'showContactsList'
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
  ul {
    height: 400px;
  }
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
