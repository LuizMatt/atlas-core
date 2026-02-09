<script lang="ts" setup>
import type { MenuItem } from 'primevue/menuitem'

type NavbarVariant = 'landing' | 'ecommerce'

interface NavProps {
    variant?: NavbarVariant
}

const props = withDefaults(defineProps<NavProps>(), {
    variant: 'landing'
})

const landingItems: MenuItem[] = [
    { label: 'Home', to: '/', icon: 'mdi mdi-home' },
    { label: 'Sobre', to: '/sobre', icon: 'mdi mdi-information' },
    { label: 'Contato', to: '/contato', icon: 'mdi mdi-email' }
]

const ecommerceItems: MenuItem[] = [
    { label: 'Produtos', to: '/produtos', icon: 'mdi mdi-shopping' },
    { label: 'Carrinho', to: '/carrinho', icon: 'mdi mdi-cart' },
    { label: 'Conta', to: '/conta', icon: 'mdi mdi-account' }
]

const items = computed(() =>
    props.variant === 'landing' ? landingItems : ecommerceItems
)
</script>

<template>
    <div>
        <Menubar 
            :model="items"
            :pt="{
                root: { class: '!rounded-none w-full flex items-center' },
                start: { class: 'flex-1 flex justify-center md:justify-start md:flex-initial' },
                menu: { class: 'flex-row-reverse' },
                menubutton: { class: 'flex-shrink-0' }
            }"
        >
            <template #start>
                <NuxtLink to="/">
                    AtlasCore
                </NuxtLink>
            </template>
        </Menubar>
    </div>
</template>

