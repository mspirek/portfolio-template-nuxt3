<script setup>
const { client } = usePrismic();
const { slices } = useSlices();

const { data: page } = await useAsyncData('contact', () => client.getByUID('page', 'contact'));

// useHead({
//   title: usePrismic().asText(page?.data.meta_title),
//   meta: [
//     { name: 'description', content: page?.usePrismic().asText(page.data.meta_description) },
//     { property: 'og:image', content: page?.data.meta_image.url },
//   ] });

const formData = ref({
  'form-name': 'contact',
  name: '',
  email: '',
  message: '',
});

const success = ref(false);
const error = ref(false);

const encodeForm = (data) => {
  return Object.keys(data)
    .map(
      key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
    )
    .join('&');
};

const submit = async () => {
  error.value = false;
  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeForm(formData.value),
    });
    success.value = true;
  } catch (err) {
    error.value = true;
  }
};
</script>

<template>
  <div>
    <SliceZone
      :slices="page.data.body"
      :components="slices"
    />

    <form
      v-if="!success"
      name="contact"
      netlify
      class="flex max-w-md flex-col gap-4"
      @submit.prevent="submit"
    >
      <div>
        <label
          class="block pb-2"
          for="name"
        >Name</label>
        <input
          id="name"
          v-model="formData.name"
          type="text"
          class="w-full rounded p-2"
          name="name"
          required
        >
      </div>
      <div>
        <label
          class="block pb-2"
          for="email"
        >Email</label>
        <input
          id="email"
          v-model="formData.email"
          type="email"
          name="email"
          class="w-full rounded p-2"
          required
        >
      </div>
      <div>
        <label
          class="block pb-2"
          for="message"
        >Message</label>
        <textarea
          id="message"
          v-model="formData.message"
          name="message"
          class="w-full rounded p-2"
          rows="6"
          required
        />
      </div>
      <BaseButton
        submit
        text="Submit"
      />
    </form>
    <div
      v-if="error"
      class="text-red-400"
    >
      There was an error submitting your form. Please try again.
    </div>
    <div
      v-if="success"
      class="text-green-400"
    >
      Your message has been submitted. I'll be in contact shortly!
    </div>
  </div>
</template> 
