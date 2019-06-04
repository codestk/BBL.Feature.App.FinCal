<template>
    <vue-form :state="formstate" @submit.prevent="onSubmit" class="general-form">
    
        <validate  tag="label"  auto-label class="form-group required-field"  >
    
            <label class="control-label">@Model.Fields["Subject"] *</label>
    
            <input type="text" name="Subject" class="form-control" placeholder="  Subject *" required maxlength="50" >
    
            <field-messages name="Subject" show="$dirty || $touched || $submitted" class="form-control-feedback">
    
                <div class="small-pad" slot="required">Model.Fields </div>
    
            </field-messages>
    
        </validate>
    
        <validate tag="label">
    
            <input v-model="model.name" required name="name" class="form-control" />
    
            <field-messages name="name">
                <div>Success!</div>
                <div slot="required">Name is a required field</div>
            </field-messages>
        </validate>
    
        <validate tag="label">
            <span>Email</span>
            <input v-model="model.email" name="email" type="email" required />
    
            <field-messages name="email">
                <div slot="required">Email is a required field</div>
                <div slot="email">Email is not valid</div>
            </field-messages>
        </validate>
    
        <button type="submit">Submit</button>
    </vue-form>
</template>

<script>
export default {

    name: 'scopes-example',
    data: function() {
        return {
            formstate: {},
            model: {
                name: 'AAA',
                email: 'invalid-email'
            }
        }
    },
    methods: {
        onSubmit: function() {
            if (this.formstate.$invalid) {
                // alert user and exit early
                return;
            }
            // otherwise submit form
        }

    }

};
</script>
