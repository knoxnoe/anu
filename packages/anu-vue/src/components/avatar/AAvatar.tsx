import { computed, defineComponent, toRef } from 'vue'
import { avatarOnlyProps } from '@/components/avatar/props'
import { useLayer, useProps as useLayerProps } from '@/composables/useLayer'
import { spacingProp, useSpacing } from '@/composables/useSpacing'

export const AAvatar = defineComponent({
  name: 'AAvatar',
  props: {
    spacing: spacingProp,
    ...useLayerProps({
      color: {
        default: 'primary',
      },
      variant: {
        default: 'light',
      },
    }),
    ...avatarOnlyProps,
  },
  setup(props, { slots }) {
    const spacing = useSpacing(toRef(props, 'spacing'))
    const { getLayerClasses } = useLayer()
    const { styles, classes } = getLayerClasses(
      toRef(props, 'color'),
      toRef(props, 'variant'),
      toRef(props, 'states'),
    )

    const defaultSlotContent = computed(() => {
      if (props.icon)
        return <i class={props.icon} />
      if (props.src) {
        return (
          <img
            alt={props.alt}
            src={props.src}
          />
        )
      }

      return props.content
    })

    return () => (
      <div
        class={['a-avatar overflow-hidden inline-flex items-center justify-center', ...classes.value]}
        style={[...styles.value, { '--a-spacing': spacing.value / 100 }]}
      >
        {
        slots.default
          ? slots.default()
          : defaultSlotContent.value
      }
      </div>
    )
  },
})

export type AAvatar = InstanceType<typeof AAvatar>
