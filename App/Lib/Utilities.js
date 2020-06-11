/**
 * 保留小数
 * @param {number} dight
 * @param {number} [bits] 保留小数位数
 */
export const round = (dight: number, bits = 3): number =>
  Math.round(dight * Math.pow(10, bits)) / Math.pow(10, bits);

export const getPercent = (past: number, total: number): number =>
  (past / total) * 100;

/**
 * 获取 unix 的时间戳
 * @param {number} [time] 时间戳,默认当前时间
 */
export const getTimestampByUnix = (time: number): number =>
  round((time ? time : Date.now()) / 1000, 0);

export const getTimestamp = (): number => Date.now();

/**
 * 计算一个时间在两个时间范围内的完成百分比
 *
 * ```
 *  var startTime = new Date();
 *  var endTime = new Date();
 *  var now = new Date();
 *  var total = endTime.getTime() - startTime.getTime();
 *  var past = now.getTime() - startTime.getTime();
 *  var percent = (past/total)*100
 * ```
 * @param {number} start 开始
 * @param {number} mid 比较时间,属于[start,end]区间
 * @param {number} end 结束
 */
export const getTimePercent = (
  start: number,
  mid: number,
  end: number
): number => getPercent(mid - start, end - start);

//生成随机ID：GUID
export const GUID = (g = 5): string =>
  (Math.random() * (Math.random() | g)).toString().substr(10);
// export const GUID = (): string =>
//   'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
//     let r = Math.random() * 16 | 0,
//         v = c == 'x' ? r : (r & 0x3 | 0x8);
//     return v.toString(16);
//   }).toUpperCase();
