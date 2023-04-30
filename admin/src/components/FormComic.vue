
<template>
    <Form
        @submit="submitComic"
        :validation-schema="comicFormSchema"
        class="row"
    >
        <div class="mb-3 col-12">
            <label class="form-label" for="name">Name:</label>
            <Field
                name="name"
                type="text"
                class="form-control"
                v-model="comicLocal.name"
            />
            <ErrorMessage name="name" class="text-danger mt-1" />
        </div>
        <div class="mb-3 col-12">
            <label class="form-label" for="photo">Photo:</label>
            <Field
                name="photo"
                type="file"
                class="form-control-file"
                v-model="comicLocal.photo"
                accept="jpg/png/jpeg*"
            />
            <ErrorMessage name="photo" class="text-danger" />
        </div>
        <div class="mb-3 col-md-6">
            <label class="form-label" for="_idGenre">Genre:</label>
            <select class="form-control" name="_idGenre" v-model="comicLocal._idGenre">
                <option 
                v-for="(genre, index) in genres"
                :key="genre._id"
                :value="genre._id"
                >{{ genre.name }}</option>
            </select>
            <ErrorMessage name="_idGenre" class="text-danger" />
        </div>
        <div class="mb-3 col-md-6">
            <label class="form-label" for="schedule">Schedule:</label>
            <select class="form-control" name="schedule" v-model="comicLocal.schedule">
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
                <option value="sunday">Sunday</option>
            </select>
            <ErrorMessage name="schedule" class="text-danger" />
        </div>
        <div class="mb-3 col-12">
            <label class="form-label" for="actor">Actor:</label>
            <Field
                name="actor"
                type="text"
                class="form-control"
                v-model="comicLocal.actor"
            />
            <ErrorMessage name="actor" class="text-danger mt-1" />
        </div>
       
        <div class="mb-3 col-12">
            <label class="form-label" for="description">Description:</label>
            <Field
                name="description"
                as="textarea"
                class="form-control"
                v-model="comicLocal.description"
            />
            <ErrorMessage name="description" class="text-danger mt-1" />
        </div>
        <div class="col-12 mb-3">
            <div class="form-check col-md-3">
                <input
                    name="trending"
                    type="checkbox"
                    class="form-check-input"
                    v-model="comicLocal.trending"
                />
                <label for="trending" class="form-check-label">
                    Trending
                </label>
            </div>
        </div>
         <div class="col-12 mb-3 form-group">
            <label class="form-label" for="content">Chapter:</label>
            <div
                v-for="(input,k) in inputs" 
                :key="k"
                class="row mb-2"
            >
                <div class="col-8">
                    <input name="nameContent"
                        type="text"
                        class="form-control mb-3"
                        v-model="input.nameContent" />
                    <input
                        name="content"
                        type="file"
                        class="form-control-file"
                        accept="pdf/*"
                        @change="onFileChange($event,input)"
                    />
                </div>
                <span>
                    <i class="fas fa-minus-circle" @click="remove(k)" v-show="k || ( !k && inputs.length > 1)" style="font-size: 20px;cursor: pointer;padding-right: 5px;"></i>
                    <i class="fas fa-plus-circle" @click="add(k)" v-show="k == inputs.length-1" style="font-size: 20px;cursor: pointer;"></i>
                </span>
                
            </div>
        </div>
        <div class="mb-3 col-12">
            <button class="btn btn-primary">Save</button>
        </div>
    </Form>
</template>

<script>
    import * as yup from "yup";
    import { Form, Field, ErrorMessage } from "vee-validate";
        import genreService from "@/services/genre.service";


    export default {
        components: {
            Form,
            Field,
            ErrorMessage,
        },
        name: "AddRemove",
        emits: ["submit:comic"],
        props: {
            comic: { type: Object, required: true },
            content: { type: Array, required: true },
        },
        data() {
            const comicFormSchema = yup.object().shape({
                name: yup
                    .string()
                    .required("Name must be valid"),
                actor: yup
                    .string()
                    .required("Name must be valid"),
                photo: yup
                    .string()
                    .required("Content must be valid"),
                description: yup
                    .string()
                    .required("Description must be valid"),
               
                
            });
            return {
                    // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
                    // comic để liên kết với các input trên form
                    genres:[],
                    // selected: this.genreSelected ? this.genreSelected : '',
                    comicLocal: this.comic,
                    inputs: this.content,
                    comicFormSchema
            };
        },
        methods: {
            onFileChange($event,input) {
                const file = $event.target.files[0];                
                // this.inputs={
                //     content:file
                // }
                // const reader = new FileReader()
                if (file) {
                    input.content = file;
                    // reader.readAsDataURL(file)
                    // reader.onload = () => {
                    // // Set a new property on the captured `file` and set it to the converted base64 image
                    // file.previewBase64 = reader.result
                    // // Emit the file with the new previewBase64 property on it
                    // this.$emit('file-updated', file)
                    // }
                    // reader.onerror = (error) => {
                    //     console.log('Error ', error)
                    // }
                }
                },
            submitComic() {
                console.log(this.inputs);
                this.$emit("submit:comic", this.comicLocal,this.inputs);
            },
            async retrieveGenres() {
                try {
                    var genres = await genreService.getAll();
                    if(genres && genres.errCode == 0){
                        this.genres = genres.genres;
                    } 
                    
                } catch (error) {
                    console.log(error);
                }
            },
            add(index) {
                this.inputs.push({
                            nameContent:'',
                            content: ''
                        });
            },
            remove(index) {
                this.inputs.splice(index, 1);
            }
        },
         mounted(){
            console.log(this.comic);
            this.retrieveGenres();
        }
    };
</script>
