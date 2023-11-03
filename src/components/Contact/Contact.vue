<template>
  <div class="container">
    <div class="contacts">
      <div v-for="(contact, index) in contacts" :key="index" class="contacts-item">
        <div :class="'contact-icon ' + contact.class" />
        <div>
          <h3 class="contact-title">{{ contact.title }}</h3>
          <p v-if="contact.contact" class="contact">{{ contact.contact }}</p>
          <SocialLinks v-else :is-contact="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { contacts } from './data';
export default {
  data() {
    return {
      contacts
    };
  }
};
</script>

<style scoped>
.contacts {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 40px 0 30px;
}
.contacts-item {
  width: calc(50% - 24px / 2);
  padding: 20px;
  background: var(--accent-second-color);
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  align-items: center;
  min-height: 98px;
}

.contact-icon {
  height: 52px;
  width: 52px;
  float: left;
  background: var(--icon-bg-color);
  border-radius: 50%;
  background-size: 26px 26px;
  background-repeat: no-repeat;
  background-position: center;
  flex-shrink: 0;
}

.telegram {
  background-image: url('../../assets/icons/contacts/telegram.svg');
}

.email {
  background-image: url('../../assets/icons/contacts/email.svg');
}

.call {
  background-image: url('../../assets/icons/contacts/call.svg');
}

.share {
  background-image: url('../../assets/icons/contacts/share.svg');
}

.contact-title {
  color: var(--contact-title-color);
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
}

.contact {
  margin: 8px 0 0;
  color: var(--main-color);
  font-size: 14px;
}

@media (max-width: 992px) {
  .contacts {
    flex-direction: column;
  }
  .contacts-item {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .contacts-item {
    padding: 16px;
    min-height: 90px;
  }
  .contact-icon {
    height: 42px;
    width: 42px;
  }

  .contact-title {
    font-size: 16px;
  }
}
</style>
