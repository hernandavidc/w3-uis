<template>
    <b-form @submit.prevent="$emit('submitForm', todo)">
        <b-form-group id="todo-input"
            label="Todo"
            label-for="todo"
        >
            <b-form-input autocomplete="off"
                id="todo"
                v-model="todo.text"
                placeholder="Introduce la tarea"
                :state="!$v.todo.text.$invalid"
                @input="$v.todo.$touch"
            > </b-form-input>
            <b-form-invalid-feedback id="todoInfo"
                v-if="$v.todo.$dirty"
            >
                Este campo es requerido y con unas long min de 4 char
            </b-form-invalid-feedback>
        </b-form-group>

        <b-button type="submit"
            variant="primary"
            :disabled="$v.todo.$invalid"
        >
            {{ submitText }}
        </b-button>
    </b-form>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
    name: 'TodoForm',
    mixins: [validationMixin],
    props:{
        todo: {
            type: Object,
            required: true
        },
        submitText: {
            type: String,
            default: 'Crear todo'
        }
    },
    validations: {
        todo: {
            text: {
                required, minLength: minLength(4)
            }
        }
    }
}
</script>