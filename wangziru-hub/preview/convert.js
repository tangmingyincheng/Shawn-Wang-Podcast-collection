const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');

const input = 'C:/Users/tangmingyincheng/OneDrive/桌面/王自如/wangziru-hub/preview/page@8a6136dade0eefbb84d06487de7af244.webm';
const output = 'C:/Users/tangmingyincheng/OneDrive/桌面/王自如/wangziru-hub/preview/wangziru-demo.mp4';

execSync(`"${ffmpeg}" -i "${input}" -c:v libx264 -preset fast -crf 23 -c:a aac -b:a 128k -y "${output}"`, { stdio: 'inherit' });
console.log('Done: ' + output);
