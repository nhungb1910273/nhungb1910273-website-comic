<script>
export default {
    props: {
        genres: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex","delete"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        },
        deleteGenre(id) {
            this.$emit("delete", id);
        },
    }
};
</script>

<template>
    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
        <thead>
            <tr>
                <th class="text-center">#</th>
                <th class="col-3">Name</th>
                <th>Description</th>
                <th class="text-center">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="(genre, index) in genres"
                :key="genre._id"
                :class="{ active: index === activeIndex }"
                @click="updateActiveIndex(index)"
            >

                <td class="text-center">{{ index + 1 }}</td>
                <td>{{ genre.name }}</td>
                <td>{{ genre.description }}</td>
                <td class="text-center">
                    <router-link
                    :to="{
                        name: 'genre.edit',
                        params: { id: genre._id },
                    }"
                    >
                    <i class="far fa-edit text-success" style="padding-right: 10px;"></i>
                    
                    </router-link>
                    <button class="btn" @click="deleteGenre(genre._id)">
                        <i class="far fa-trash-alt text-danger"></i>
                    </button>
                    
                </td>
            </tr>
            
        </tbody>
    </table>
    
</template>