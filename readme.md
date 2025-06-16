# Composition API

## [What is Composition API in Vue.js?](https://vuejs.org/guide/introduction.html#composition-api)

Composition API adalah fitur baru di Vue.js yang memungkinkan kita untuk mengorganisir kode dengan cara yang lebih modular dan terstruktur. Dengan Composition API, kita dapat menggunakan fungsi-fungsi reaktif dan komposisi logika dalam komponen Vue.js kita. 

Ada beberapa API penting yang di-cover oleh composition API yaitu :
- **Reactivity API**, e.g. ref() and reactive(),  yang bisa kita gunakan untuk membuat state reaktif, computed state, dan watchers
- **Lifecycle Hooks**, e.g. onMounted() and onUnmounted(), yang bisa kita gunakan didalam siklus hidup komponen
- **Dependency Injection**, i.e. provide() and inject(), yang bisa kita gunakan untuk memasukkan injection system ketika menggunakan Reactivity API.


## [Why Composition API?](https://vuejs.org/guide/extras/composition-api-faq.html#why-composition-api)
Composition API memberikan beberapa keuntungan dibandingkan dengan Options API, antara lain:
- **Better Logic Reuse**, dengan Composition API, kita bisa lebih mudah membagi logika menjadi fungsi-fungsi kecil yang dapat digunakan kembali di berbagai komponen.
- **More Flexible Code Organization**, kita bisa mengorganisir kode dengan cara yang lebih fleksibel dan sesuai dengan kebutuhan kita.
- **Better Type Inference**, terutama jika kita menggunakan TypeScript, Secara garis besar, Composition API memberikan dukungan yang lebih baik untuk TypeScript dibandingkan dengan Options API.
- **Smaller Production Bundle**, dengan Composition API kita bisa mengurangi ukuran bundle aplikasi kita karena kita bisa mengimpor hanya fungsi-fungsi yang kita butuhkan.
- **Better Performance**, Composition API dapat memberikan performa yang lebih baik dalam beberapa kasus, terutama ketika kita memiliki banyak komponen yang saling berinteraksi.

## [Script Setup](https://vuejs.org/api/sfc-script-setup.html#script-setup)
Script Setup adalah sintaks baru yang diperkenalkan di Vue 3.2 untuk membuat komponen dengan Composition API. Dengan Script Setup, kita bisa menulis komponen dengan cara yang lebih sederhana dan bersih. Beberapa fitur dari Script Setup antara lain:
- **Tanpa `export default`**: Kita tidak perlu menulis `export default` di dalam komponen, state sudah otomatis terekspos ke template.
- **Akses Langsung**: Kita bisa langsung mengakses reactive properties, computed properties, dan methods tanpa perlu mendeklarasikannya di dalam `setup()` function.

## [Reactive Properties](https://vuejs.org/guide/essentials/reactivity-fundamentals.html)
Reactive properties adalah properti yang dapat berubah secara reaktif dan akan mentrigger proses rerender ketika nilainya berubah. Dalam Composition API, kita dapat menggunakan fungsi `ref()` dan `reactive()` untuk membuat reactive properties.
- **ref()**: digunakan untuk membuat reactive property. Jika mau akses nilainya di javascript, harus menggunakan `.value`, tetapi jika mau akses nilainya di template, kita tidak perlu menggunakan `.value`.
- **reactive()**: digunakan untuk membuat reactive object/array. Kita tidak perlu menggunakan `.value` untuk mengakses nilainya, tetapi ada beberapa batasan yang perlu diperhatikan.

### [reactive() Limitations](https://vuejs.org/guide/essentials/reactivity-fundamentals.html#limitations-of-reactive)
Mungkin `reactive()` terlihat lebih praktis karena kita tidak perlu menggunakan `.value` untuk mengakses nilainya, tetapi ada beberapa hal yang perlu diperhatikan ketika menggunakan reactive:
- Tidak menerima tipe data primitif seperti string, number dan boolean.
- Tidak bisa mengganti keseluruhan objek.
- Tidak bisa di-destructure, jika di destructure maka kita tidak bisa mendapatkan reactivity-nya.

TLDR, lebih disarankan menggunakan `ref()`

## [Computed Property](https://vuejs.org/guide/essentials/computed.html)
Computed property adalah properti yang dihitung berdasarkan reactive properties lainnya. Dalam Composition API, kita dapat menggunakan fungsi `computed()` untuk membuat computed property. Computed property akan secara otomatis memperbarui nilainya ketika reactive properties yang menjadi dependensinya berubah.

### [Function vs Computed](https://vuejs.org/guide/essentials/computed.html#computed-caching-vs-methods)
- **Function**: Fungsi biasa yang akan dieksekusi setiap kali kita memanggilnya. Fungsi ini tidak memiliki cache, sehingga setiap kali kita memanggilnya, fungsi tersebut akan dieksekusi ulang.
- **Computed**: Computed property adalah properti yang dihitung berdasarkan reactive properties lainnya. Computed property akan secara otomatis memperbarui nilainya ketika reactive properties yang menjadi dependensinya berubah. Computed property memiliki cache, sehingga jika nilai dependensinya tidak berubah, computed property tidak akan dieksekusi ulang.

## [Watchers](https://vuejs.org/guide/essentials/watchers.html)
Watchers adalah fungsi yang digunakan untuk memantau perubahan pada reactive properties. Dalam Composition API, kita dapat menggunakan fungsi `watch()` untuk membuat watcher. Watcher akan dieksekusi setiap kali nilai reactive property yang dipantau berubah.

## Props & Emits in Composition API
- [Props](https://vuejs.org/guide/components/props.html#props) : gunakan `defineProps()` untuk mendefinisikan props yang diterima oleh komponen.
- [Emits](https://vuejs.org/guide/components/events.html#declaring-emitted-events) : gunakan `defineEmits()` untuk mendefinisikan events yang akan di-emits oleh komponen.