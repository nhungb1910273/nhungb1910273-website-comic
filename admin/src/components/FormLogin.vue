<template>
    <Form @submit="submitUser" :validation-schema="userFormSchema" class="user">
        <div class="form-group">
            <Field name="email" v-model="userLocal.email" type="email" class="form-control form-control-user"
                placeholder="Enter Email Address..." />
                <ErrorMessage name="email" class="text-danger mx-2 my-1" />
            
        </div>
        <div class="form-group">
            <Field name="password" v-model="userLocal.password" type="password" class="form-control form-control-user"
                placeholder="Password" />
                <div class="form-text">We'll never share your password with anyone else.</div>
            <ErrorMessage name="password" class="text-danger mx-2 my-1" />

        </div>
        
        <button class="btn btn-primary btn-user btn-block">
            Login
        </button>
        <hr>
    </Form>
</template>


<script>
    import * as yup from "yup";
    import { Form, Field, ErrorMessage } from "vee-validate";
    
    export default {
        components: {
            Form,
            Field,
            ErrorMessage,
        },
        emits: ["submit:user"],
        props: {
        user: { type: Object, required: true },
        },
        data() {
            const userFormSchema = yup.object().shape({
                
                email: yup
                    .string()
                    .required("E-mail must be valid")
                    .email("Invalid email address")
                    .max(50, "Maximum 50 characters required"),
                password: yup
                    .string()
                    .required("Password must be valid")
                    .min(8, "Minimum 8 characters required")                    
               
            });
        return {
            // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
            // user để liên kết với các input trên form
            userLocal: this.user ? this.user : '',
            userFormSchema,
            };
        },
        methods: {
            submitUser() {
                console.log(this.userLocal);
                this.$emit("submit:user", this.userLocal);
            },
        },
    };
</script>
