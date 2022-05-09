<template>
  <div id="app">
    <Form @submit="onSubmit">
      <Field name="email" type="email" @change="validateEmail" :rules="validateEmail" />
      <ErrorMessage name="email"></ErrorMessage><br />
      <Field name="phone" type="phone" @change="validatePhone" :rules="validatePhone" />
      <ErrorMessage name="phone" class="phone"></ErrorMessage>
      <button>Sign up for newsletter</button>
    </Form>
  </div>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  data() {
    return {
      box: [],
    };
  },
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  methods: {
    onSubmit() {
      console.log("Submitting :(");
    },
    validateEmail(value) {
      if (!value) {
        return "This field is required";
      }
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "This field must be a valid email";
      }
      // All is good
      return true;
    },
    validatePhone(value) {
      const phonenum = /^[0-9]{10}$/g;
      if (!value) {
        return "This field is required";
      }
      if (!phonenum.test(value)) {
        return "This field must be a valid phone";
      }
      return true;
    },
  },
};
</script>
<style>
    .phone{
        color: rgb(50, 54, 54);
        font-size: 150px;
    }
</style>
