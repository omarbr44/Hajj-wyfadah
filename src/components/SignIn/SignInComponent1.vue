<template>
    <div class="flex flex-col items-center w-full">
            <div class="form-input w-[80%] px-5 rtl-d">
                <div>
                    <label class="font-bold id-label transition-all" for="idNumber">رقم الهوية</label>
                    <input 
                     id="id-number"
                     name="idNumber" 
                     type="text" 
                     class="w-full relative border p-2 rounded-xl my-3 text-sm focus:border-site-blue"
                     placeholder="مثال:1069***30">
                </div>
                <div>
                    <label class="font-bold booking-number-label transition-all" for="bookingNumber">رقم الحجز</label>
                    <input 
                     id="booking-number"
                     name="bookingNumber" 
                     type="text" 
                     class="w-full relative border p-2 rounded-xl my-3 text-sm focus:border-site-blue"
                     placeholder="مثال:9**529">
                </div>
            </div>
    </div>
</template>
<script setup>

</script>
<style>
 /* apply styles to label when input is focused */
.id-label:has(+ #id-number:focus), .booking-number-label:has(+ #booking-number:focus) {
    background-color: white;
    color: #48b4c3;
    padding: 0 0.5rem;
    position: absolute;
    z-index: 1;
    font-size: 0.75rem;
    width: max-content;
    right: 0;
    transform: translate(-40px,2px);
}
</style>
