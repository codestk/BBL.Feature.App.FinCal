<template>
    <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <!--<router-link class="nav-link" to="/blog">แผนออมเงินเพื่อเป้าหมาย</router-link>-->
                <a href="#"
                   class="nav-link"
                   @click.prevent="$router.push({ name: 'FinancialHealthCheck' })">ตรวจสุขภาพทางการเงิน</a>
            </li>
            <li class="nav-item">
                <!--<router-link class="nav-link" to="/blog">แผนออมเงินเพื่อเป้าหมาย</router-link>-->
                <a href="#"
                   class="nav-link"
                   @click.prevent="$router.push({ name: 'SavingPlan' })">แผนออมเงินเพื่อเป้าหมาย</a>
            </li>
            <li class="nav-item">
                <!--<router-link class="nav-link" to="/services">แผนเกษียณอายุ</router-link>-->
                <a href="#"
                   class="nav-link"
                   @click.prevent="$router.push({ name: 'RetrimentPlan' })">แผนเกษียณอายุ</a>
            </li>
            <li class="nav-item">
                <!--<router-link class="nav-link" to="/contact">แผนประหยัดภาษี</router-link>-->
                <a href="#"
                   class="nav-link"
                   @click.prevent="$router.push({ name: 'TaxSavingPlan' })">แผนประหยัดภาษี</a>
            </li>
            <li class="nav-item">
                <!--<router-link class="nav-link" to="/contact">แผนประหยัดภาษี</router-link>-->
                <a href="#"
                   class="nav-link"
                   @click.prevent="$router.push({ name: 'HomeLoanPlan' })">แผนคำนวณยอดผ่อนชำระสินเชื่อบ้าน</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "SideMenu"
    };
</script>

<style>
    .nav-item {
        height: 120px;
        border: 1px solid #ddd;
        border-radius: 10px;
        margin: 0 0 20px 20px;
        width: 130px;
        display: inline-table;
    }

    .nav-link {
        cursor: pointer;
        cursor: hand;
    }
</style>