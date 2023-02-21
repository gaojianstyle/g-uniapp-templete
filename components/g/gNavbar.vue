<!-- 导航条模板 -->
<template>
    <view class="ua__navbar">
        <view class="ua__navbar-wrap" :class="{'custom': custom, 'fixed': fixed || transparent}"
            :style="{'height': customBarH + 'px', 'padding-top': (custom ? statusBarH : 0) + 'px', 'background': bgcolor, 'color': color, 'z-index': zIndex}">
            <!-- //左侧 (返回) -->
            <view class="action navbar-action__left" v-if="back && back!='false'" @click="onBack">
                <template v-if="$slots.back">
                    <slot name="back" />
                </template>
                <template v-else><text class="iconfont nvuefont"
                        :style="{'color': color}">{{'\ue84c'}}</text></template>
                <slot name="backText" />
            </view>
            <slot name="left" />

            <!-- //标题 -->
            <view v-if="!search" class="navbar-title" :class="{'center': center}">
                <template v-if="$slots.title">
                    <slot name="title" />
                </template>
                <template v-else><text :style="{'color': color}">{{title}}</text></template>
            </view>

            <!-- //搜索框 -->
            <view v-if="search" class="action navbar-action__search">
                <slot name="search" />
            </view>

            <!-- //右侧 -->
            <view class="action navbar-action__right">
                <slot name="right" />
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        props: {
            // 是否采用自定义导航模式
            custom: { type: [Boolean, String], default: false },
            // 是否返回
            back: { type: [Boolean, String], default: true },
            // 标题
            title: { type: String, default: '' },
            // 标题颜色
            color: { type: String, default: '#353535' },
            // 背景色
            bgcolor: { type: String, default: '#fff' },
            // 标题是否居中
            center: { type: [Boolean, String], default: false },
            // 搜索框
            search: { type: [Boolean, String], default: false },
            // 是否固定导航
            fixed: { type: [Boolean, String], default: false },
            // 是否背景透明
            transparent: { type: [Boolean, String], default: false },
            // 设置层叠
            zIndex: { type: [Number, String], default: '2022' },
        },
        data() {
            return {
                statusBarH: 0,
                customBarH: 0,
            }
        },
        beforeCreate() {
            // #ifdef APP-NVUE
            var domModule = weex.requireModule('dom');
            domModule.addRule('fontFace', {
                'fontFamily': "nvueIcon",
                'src': "url('/static/fonts/iconfont.ttf')"
            });
            // #endif
        },
        created() {
            const app = getApp()
            // 获取状态栏和导航条高度
            this.statusBarH = app.globalData.statusBarH
            this.customBarH = this.custom ? app.globalData.customBarH : app.globalData.customBarH - this.statusBarH
        },
        methods: {
            onBack() {
                uni.navigateBack({
                    delta: 1
                })
            }
        }
    }
</script>