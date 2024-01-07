<template>
    <div class="fixed h-screen top-0 left-0 w-full z-0">
        <div
            class="box box-1 absolute -translate-y-[300px] left-[980px] top-[120px] w-[68px] h-[143px] bg-white/5"
        ></div>
        <div
            class="box box-2 absolute -translate-y-[300px] left-[1370px] top-[120px] w-[77px] h-[157px] bg-white/5"
        ></div>
        <div
            class="box box-3 absolute -translate-y-[300px] left-[760px] top-[30px] w-[76px] h-[125px] bg-white/5"
        ></div>
        <div
            class="box box-4 absolute -translate-y-[300px] left-[170px] top-[80px] w-[91px] h-[153px] bg-white/5"
        ></div>
        <div
            class="box box-5 absolute -translate-y-[300px] left-[990px] top-[50px] w-[89px] h-[120px] bg-white/5"
        ></div>
        <div
            class="box box-6 absolute -translate-y-[300px] left-[1670px] top-[10px] w-[92px] h-[147px] bg-white/5"
        ></div>
        <div
            class="box box-7 absolute -translate-y-[300px] left-[1260px] top-[70px] w-[81px] h-[156px] bg-white/5"
        ></div>
        <div
            class="box box-8 absolute -translate-y-[300px] left-[430px] top-[40px] w-[91px] h-[151px] bg-white/5"
        ></div>
        <div
            class="box box-9 absolute -translate-y-[300px] left-[860px] top-[90px] w-[68px] h-[135px] bg-white/5"
        ></div>
        <div
            class="box box-10 absolute -translate-y-[300px] left-[140px] top-[50px] w-[78px] h-[150px] bg-white/5"
        ></div>
        <div
            class="box box-11 absolute -translate-y-[300px] left-[1230px] top-[10px] w-[87px] h-[156px] bg-white/5"
        ></div>
        <div
            class="box box-12 absolute -translate-y-[300px] left-[390px] top-[80px] w-[84px] h-[126px] bg-white/5"
        ></div>
        <div
            class="box box-13 absolute -translate-y-[300px] left-[520px] top-[50px] w-[67px] h-[146px] bg-white/5"
        ></div>
        <div
            class="box box-14 absolute -translate-y-[300px] left-[1770px] top-[20px] w-[88px] h-[114px] bg-white/5"
        ></div>
        <div
            class="box box-15 absolute -translate-y-[300px] left-[96px] top-[70px] w-[77px] h-[109px] bg-white/5"
        ></div>
    </div>
</template>
<style scoped>
.box-1 {
    animation: falling 8.7s linear 2s infinite forwards;
}

.box-2 {
    animation: falling 10s linear 3.5s infinite forwards;
}

.box-3 {
    animation: falling 7.2s linear 2.5s infinite forwards;
}

.box-4 {
    animation: falling 9s linear 0s infinite forwards;
}

.box-5 {
    animation: falling 6.8s linear 3s infinite forwards;
}

.box-6 {
    animation: falling 9s linear 2.5s infinite forwards;
}

.box-7 {
    animation: falling 10s linear 1.5s infinite forwards;
}

.box-8 {
    animation: falling 8.5s linear 6s infinite forwards;
}

.box-9 {
    animation: falling 9.5s linear 5s infinite forwards;
}

.box-10 {
    animation: falling 8.3s linear 7s infinite forwards;
}

.box-11 {
    animation: falling 7s linear 1s infinite forwards;
}

.box-12 {
    animation: falling 9.8s linear 0s infinite forwards;
}

.box-13 {
    animation: falling 8.4s linear 4.5s infinite forwards;
}

.box-14 {
    animation: falling 9.9s linear 2s infinite forwards;
}

.box-15 {
    animation: falling 7.5s linear 5.5s infinite forwards;
}

@keyframes falling {
    0% {
        transform: translateZ(0);
    }
    30% {
        opacity: 0.3;
    }
    75% {
        transform: translate3d(0, 100vh, 0);
        opacity: 0.1;
    }
    100% {
        transform: translate3d(0, 100vh, 0);
        opacity: 0;
    }
}
</style>
