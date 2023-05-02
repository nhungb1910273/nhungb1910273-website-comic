<script>
export default {
    props: {
        users: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        },
       
    }
};
</script>

<template>
    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
        <thead>
            <tr>
                <th class="text-center">#</th>
                <th class="col-3">Username</th>
                <th>Email address</th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="(user, index) in users"
                :key="user._id"
                :class="{ active: index === activeIndex }"
                @click="updateActiveIndex(index)"
            >

                <td class="text-center">{{ index + 1 }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                
            </tr>
            
        </tbody>
    </table>
    
</template>