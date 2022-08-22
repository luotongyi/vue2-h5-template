
import _import from '@/pages'
import Layout from '@/components/MainContainer'

export default [
  {
    path: '/test',
    component: Layout,
    redirect: '/test/testPage',
    children: [
      {
        path: '/test/testPage', // 可根据配置改为 path: '/testPage'
        name: 'testPage',
        component: _import('test'),
        meta: {
          title: '测试页面'
        }
      }
    ]
  }
]
