<template>
    <Form @submit="submitUser" :validation-schema="userFormSchema" class="m-4">
        <div class="mb-3">
            <label class="form-label" style="color:#666666">Username</label>
            <Field type="text" class="form-control" name="name" v-model="userLocal.name"/>
            <ErrorMessage name="name" class="text-danger" />
        </div>
        <div class="mb-3">
            <label class="form-label" style="color:#666666">Email address</label>
            <Field type="email" class="form-control" name="email" v-model="userLocal.email" />
            <ErrorMessage name="email" class="text-danger" />
        </div>
        <div class="mb-4">
            <label class="form-label" style="color:#666666">Password</label>
            <Field type="password" class="form-control" name="password" v-model="userLocal.password" />
            <div class="form-text">We'll never share your email with anyone else.</div>
            <ErrorMessage name="password" class="text-danger" />

        </div>
        <div class="mb-4">
            <label class="form-label" style="color:#666666">Confirm Password</label>
            <Field type="password" class="form-control" name="confirmPassword" v-model="userLocal.confirmPassword" />
            <div class="form-text">We'll never share your email with anyone else.</div>
            <ErrorMessage name="confirmPassword" class="text-danger" />

        </div>
        <button type="submit" class="btn text-light col-12" style="background-color: #e74c3c;">Register</button>
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
                name: yup
                    .string()
                    .required("Tên phải có giá trị.")
                    .min(2, "Minimum 8 characters required"),
                email: yup
                    .string()
                    .required("E-mail must be valid")
                    .email("Invalid email address")
                    .max(50, "Maximum 50 characters required"),
                // address: yup.string().max(100, "Địa chỉ tối đa 100 ký tự."),
                password: yup
                    .string()
                    .required("Password must be valid")
                    .min(8, "Minimum 8 characters required"),                    
                    // .matches(
                    //     /((09|03|07|08|05)+([0-9]{8})\b)/g,
                    //     "Số điện thoại không hợp lệ."
                    // ),
                confirmPassword: yup
                    .string()
                    .required("Password must be valid")
                    .min(8, "Minimum 8 characters required"),
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
                this.$emit("submit:user", this.userLocal);
            },
        },
    };
</script>
