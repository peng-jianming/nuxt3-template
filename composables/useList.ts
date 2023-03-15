import type { Ref } from 'vue'

export default function useList<ItemType extends object>(
  listRequestFn: any,
  filterOption: Ref<object>,
) {
  // 加载态
  const loading = ref(false)
  // 完成态
  const finished = ref(false)
  // 当前页
  const curPage = ref(1)
  // 总
  const total = ref(0)
  // 分页大小
  const pageSize = ref(4)
  // 数据
  const list = ref<ItemType[]>([])
  
  const loadData = async (reload = false) => {
    //  重置搜索,页数变为1
    if (reload)
      curPage.value = 1
    loading.value = true
    try {
      const data = await listRequestFn({
        page: curPage.value,
        per_page: pageSize.value,
        ...filterOption.value,
      })
      //  重置搜索,列表清空,完成态为未完成
      if (reload) {
        list.value = []
        finished.value = false
      }
      list.value = list.value.concat(data.items || data.list)
      total.value = data.total

      if (total.value <= list.value.length)
        finished.value = true
    }
    catch (error) {
      console.log(error)
    }
    finally {
      loading.value = false
    }
  }

  loadData()

  return {
    loading,
    finished,
    curPage,
    pageSize,
    total,
    list,
    filterOption,
    loadData,
  }
}
