import {
  orchestrationApiMenu,
  orchestrationDeveloperToolsMenu,
  orchestrationDocsMenu,
} from '@/config/menus/awell-orchestration'
import {
  pluginsApiMenu,
  pluginsDeveloperToolsMenu,
  pluginsDocsMenu,
} from '@/config/menus/awell-plugins'
import { scoreDocsMenu } from '@/config/menus/awell-score'
import { BadgeType } from '@/types/menu.types'

interface FlattenedMenuType {
  title: string
  path?: string
  parentTitle?: string
  openInNewTab?: boolean
  badge?: BadgeType
}

interface useMenusHook {
  menus: FlattenedMenuType[]
}

export const useMenus = (): useMenusHook => {
  const menus = [
    ...orchestrationDocsMenu,
    ...orchestrationApiMenu,
    ...orchestrationDeveloperToolsMenu,
    ...pluginsDocsMenu,
    ...pluginsApiMenu,
    ...pluginsDeveloperToolsMenu,
    ...scoreDocsMenu,
  ]

  const flattenedMenu: FlattenedMenuType[] = menus
    .flatMap((menuItem) => {
      if (menuItem.submenu) {
        return menuItem.submenu.map((subMenuItem) => {
          return {
            parentTitle: menuItem.title,
            ...subMenuItem,
          }
        })
      }

      return [menuItem]
    })
    .flatMap((menuItem) => {
      if (menuItem?.submenu) {
        return menuItem.submenu.map((subMenuItem) => {
          return {
            parentTitle: menuItem.title,
            ...subMenuItem,
          }
        })
      }
      return [menuItem]
    })

  return { menus: flattenedMenu }
}
