import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'
import { fetcher } from '~/utils/misc'

type Stats = {
  type: string; 
  slug: string;
  views: number;
  loves: number;
  applauses: number;
  ideas: number;
  bullseyes: number;
}

export function useBlogStats(type: string, slug: string) {
  let { data, isLoading } = useSWR<Stats>(`/api/stats?slug=${slug}&type=${type}`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })
  let { views, loves, applauses, ideas, bullseyes } = data || {}
  let stats: Stats = {
    type,
    slug,
    views: views || 0,
    loves: loves || 0,
    applauses: applauses || 0,
    ideas: ideas || 0,
    bullseyes: bullseyes || 0,
  }
  return [stats, isLoading] as const
}

export function useUpdateBlogStats() {
  let { trigger } = useSWRMutation(
    '/api/stats',
    async (url: string, { arg }: { arg: Partial<Stats> }) => {
      return fetch(url, {
        method: 'POST',
        body: JSON.stringify(arg),
      }).catch(console.error)
    }
  )
  return trigger
}
