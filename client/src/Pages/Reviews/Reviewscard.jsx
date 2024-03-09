import React from "react"


const containerStyle = {
    backgroundColor: "var(--white)",
    boxShadow: "var(--sh01)",
    padding: "24px",
    borderRadius: "16px",
    maxWidth: "500px",
  };
  
  export default function Reviewscard(props) {
    return (
      <div style={containerStyle} className="card flx col">
      <div className="flx w100 gAuto">
        <div className="flx rowM g8 fil">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M26.8687 37.2937C26.8594 37.35 26.8406 37.4156 26.8031 37.4719C26.6156 37.7719 26.4937 38.1 26.3625 38.4187C26.6437 38.3062 26.9719 38.2688 27.2812 38.3063C27.1125 37.9875 26.9719 37.65 26.8687 37.2937ZM24.6562 37.1156C24.0844 37.0219 23.5219 36.7969 22.9406 36.8344C22.9031 36.8344 22.875 36.8344 22.8469 36.8344C22.6312 37.275 22.2937 37.6687 21.8531 38.0062C21.8906 38.0437 21.9187 38.1 21.9469 38.1563C22.1625 38.6438 22.4156 39.1125 22.6781 39.5813C22.8844 39.9563 23.2031 40.3687 23.3156 40.7812C23.3812 41.0063 23.475 41.2219 23.5969 41.4187C23.6062 41.4 23.625 41.3719 23.6344 41.3531C24.1312 40.575 24.5531 39.7969 24.9562 38.9625C25.2375 38.3906 25.4437 37.7625 25.7531 37.2094C25.3969 37.1906 25.0219 37.1719 24.6562 37.1156Z"
              fill="#D6E5E5"
            />
            <path
              d="M27.4219 39.4969C27.3563 39.3375 27.0656 39.2719 26.8688 39.3281C26.8219 39.3375 26.6531 39.3938 26.6625 39.3938C26.6344 39.4031 26.5031 39.5156 26.55 39.4594C26.5313 39.4781 26.5219 39.4875 26.5219 39.4875C26.625 39.7125 26.5594 39.9281 26.4281 40.0781C26.7375 40.6594 27.7313 40.1906 27.4219 39.4969Z"
              fill="#EF4754"
            />
            <path
              d="M29.8875 34.9031C29.8031 34.5 29.7937 34.125 29.7937 33.7312C28.7906 34.3406 27.6562 34.7625 26.4187 34.9406C25.1531 35.1281 23.8969 35.0531 22.6875 34.7625C22.8187 35.1281 22.875 35.4656 22.875 35.7844C23.3813 35.7937 23.85 35.9344 24.3469 36.0375C24.9563 36.1594 25.5938 36.1594 26.2125 36.1687C27.3281 36.1781 28.4062 36.1312 29.4281 35.6812C29.4562 35.6437 29.4937 35.6062 29.5312 35.5687C29.6063 35.5125 29.6906 35.475 29.775 35.4469C29.8594 35.4187 29.9437 35.4094 30.0375 35.4281C29.9719 35.2594 29.925 35.0812 29.8875 34.9031Z"
              fill="#FCBF95"
            />
            <path
              d="M31.2187 36.9937C31.0406 36.8062 30.8719 36.6094 30.7219 36.3844C30.6844 36.3281 30.6469 36.2719 30.6187 36.2156C30.5812 36.3 30.525 36.375 30.4406 36.4219C29.6156 36.8437 28.7812 37.0594 27.9 37.1437C28.1719 37.95 28.6781 38.6719 29.0062 39.45C29.175 39.8531 29.3156 40.4906 29.6062 40.9031C29.9531 40.2937 30.1875 39.5906 30.4875 38.9625C30.6281 38.6625 30.7687 38.3625 30.8906 38.0531C30.9469 37.9031 31.0125 37.7531 31.0406 37.6031C31.0406 37.5937 31.0594 37.3687 31.0875 37.4812C31.05 37.2844 31.1062 37.1156 31.2187 36.9937Z"
              fill="#D6E5E5"
            />
            <path
              d="M34.0687 13.1344C33.6937 12.7219 33.2906 12.2438 32.9812 11.7281C32.3437 12.225 31.6031 12.5344 30.7687 12.525C30.1031 12.5156 29.5031 12.2906 28.9875 11.925C28.5281 13.0031 27.2906 13.7063 26.1281 13.8188C24.5437 13.9688 22.9219 13.4813 21.8719 12.2813C20.8312 12.7594 19.7156 13.0969 18.5625 13.0594C17.9531 13.0406 17.2219 12.8625 16.65 12.5156C16.4437 13.0313 16.1719 13.5188 15.8344 13.9781C15.6375 14.2406 15.3937 14.5031 15.1125 14.6813C15 14.7563 14.8781 14.8313 14.7469 14.8688C14.7 14.8875 14.625 14.8969 14.55 14.9156C14.6531 16.2563 14.8031 17.5875 14.9906 18.9188C15.2812 20.9531 15.5531 22.9969 15.8906 25.0219C16.1719 26.7 16.5844 28.4156 17.5125 29.8594C18.4969 31.3969 19.9781 32.5969 21.6562 33.3C23.8594 34.2281 26.4187 34.3125 28.6125 33.3187C30.7594 32.3437 32.4187 30.5344 33.375 28.3969C33.9187 27.1875 34.2375 25.9312 34.4531 24.6562C34.4531 24.6469 34.4531 24.6375 34.4531 24.6188V24.4969C34.4531 24.3937 34.4812 24.3 34.5187 24.225C34.6594 23.2687 34.7531 22.2938 34.8375 21.3188C35.0531 18.9375 35.1937 16.5469 35.325 14.1563C34.8375 13.9688 34.3781 13.4906 34.0687 13.1344ZM20.9625 18.3844C20.5406 18.7219 19.8844 18.6563 19.5 18.2906C19.0406 17.8594 19.0594 17.1188 19.3969 16.65C19.2094 16.6406 19.0125 16.6594 18.8156 16.7063C18.7406 16.7813 18.6281 16.8375 18.4781 16.8375H18.2812C17.7 16.8375 17.4375 15.9656 18.0656 15.7969C19.2656 15.4594 20.8781 15.4781 21.2719 16.95C21.4031 17.4563 21.4125 18.0281 20.9625 18.3844ZM23.8687 16.7906C23.925 16.0969 24.975 16.3125 24.9281 16.9969C24.8156 18.4219 25.0594 19.8281 25.05 21.2438C25.0406 21.9656 24.8437 23.5313 25.7156 23.8406C26.3625 24.075 25.8844 25.0313 25.2375 24.8063C24 24.3656 23.9719 22.725 23.9812 21.6375C23.9812 20.0063 23.7375 18.4031 23.8687 16.7906ZM27.3375 28.275C26.7187 28.6875 26.025 29.175 25.2375 29.025C24.5344 28.8844 23.7844 28.5 23.5031 27.8156C23.2312 27.1781 24.2531 26.8219 24.5156 27.4594C24.6562 27.7969 25.3312 28.0219 25.6687 27.9656C26.0625 27.9 26.4094 27.6 26.7375 27.3844C27.3094 27 27.9094 27.8906 27.3375 28.275ZM31.0594 17.8688C30.1406 18.3656 29.2125 17.3438 29.4187 16.4344C29.2312 16.4813 29.0531 16.5844 28.9031 16.7625C28.4531 17.2875 27.6469 16.5844 28.0969 16.05C28.8281 15.1969 30.0094 15.1125 30.9094 15.7688C31.6031 16.275 31.9969 17.3625 31.0594 17.8688Z"
              fill="#FCBF95"
            />
            <path
              d="M36.9656 30.75C36.5438 29.7844 36.0375 28.8469 35.7094 27.8344C35.6906 27.7875 35.6813 27.7312 35.6625 27.6844C35.6719 28.7344 35.6063 29.7844 35.3625 30.8062C35.1656 31.6687 34.8656 32.5875 34.9313 33.4875C34.9688 34.1062 35.2875 35.1375 36.0938 35.0625C36.7594 34.9969 37.3406 34.35 37.4625 33.7125C37.6594 32.6812 37.3781 31.6969 36.9656 30.75Z"
              fill="#3AB37C"
            />
            <path
              d="M33.1781 8.67187C32.7562 8.03437 32.0812 7.9125 31.4156 7.66875C30.6375 7.3875 30.2812 6.89062 30.2437 6.06562C30.2062 5.3625 29.8969 4.90313 29.2406 4.6125C28.6312 4.33125 27.9656 4.20937 27.3 4.13437C26.5687 4.05937 25.8094 4.58437 25.425 5.16562C25.275 5.39062 25.0219 5.44687 24.8156 5.39062C24.6656 5.64375 24.3281 5.775 24.0656 5.50312C23.1094 4.54688 21.5437 4.90312 20.4469 5.4C19.7906 5.7 19.0969 6.12187 18.8531 6.84375C18.6562 7.41562 18.6375 7.95937 19.3219 8.11875C19.9031 8.25 19.8375 9.05625 19.2656 9.14062C18.6094 9.23437 17.9437 9.54375 17.4094 9.94687C17.1094 10.1719 16.4531 10.7062 16.7437 11.1562C17.2219 11.8875 18.2531 12.075 19.0594 12.0094C19.9969 11.9344 20.9062 11.625 21.7406 11.1937C21.9937 11.0625 22.2844 11.0812 22.4531 11.3344C23.2219 12.45 24.6187 12.9187 25.9406 12.7875C26.8781 12.6937 28.1906 12.0844 28.1344 10.9781C28.1062 10.4156 28.7531 10.2844 29.0719 10.65C30.2062 11.9437 32.0625 11.6062 32.9812 10.2469C33.2812 9.80625 33.4969 9.15937 33.1781 8.67187Z"
              fill="#F6851F"
            />
            <path
              d="M45.0844 22.875C45.0844 21.9844 45.1125 20.8969 44.5781 20.1281C44.1375 19.5 43.2937 19.2 43.2562 18.3281C43.2094 17.4562 44.2031 16.8937 44.3156 16.05C44.4094 15.3 44.3062 14.5125 44.0156 13.8094C43.4437 12.3937 42.2156 11.3719 40.6312 11.7C40.2375 11.7844 39.9656 11.2781 40.125 10.9594C40.6312 9.975 40.0969 8.80312 39.375 8.07187C38.9719 7.66875 38.5687 7.18125 38.0625 6.91875C37.5281 6.6375 37.0312 6.75 36.45 6.75937C36.1687 6.76875 35.925 6.57187 35.8969 6.28125C35.8219 5.4 35.4469 4.6125 34.6219 4.21875C33.8156 3.83437 32.8969 3.75937 32.0156 3.75937C31.725 3.75937 31.4906 3.58125 31.4625 3.28125C31.3781 2.5125 30.2719 1.97812 29.6344 1.79062C28.9969 1.60312 27.9469 1.3875 27.6281 2.16562C27.5906 2.25937 27.5344 2.325 27.4781 2.37187C27.4687 2.61562 27.4312 2.85937 27.3844 3.10312C28.1344 3.13125 28.95 3.32812 29.6062 3.6375C30.375 3.99375 31.1156 4.6125 31.2469 5.49375C31.3031 5.85 31.1719 6.43125 31.5562 6.60937C31.9687 6.80625 32.4187 6.87187 32.8312 7.06875C33.6281 7.45312 34.3687 8.20312 34.3781 9.14062C34.3875 9.80625 34.1531 10.4437 33.7594 10.9687C33.975 11.4187 34.3406 11.8594 34.65 12.2344C34.8656 12.4969 35.1 12.7594 35.3719 12.9656C35.475 13.0406 35.5687 13.125 35.6906 13.1719C36.15 12.9562 36.5906 13.5 36.3844 13.875C36.2719 15.9937 36.15 18.1125 35.9812 20.2219C35.8687 21.5531 35.7937 22.8937 35.6062 24.225C35.7094 24.2719 35.8031 24.375 35.85 24.525C36.1969 25.7344 36.4781 26.9812 36.9375 28.1625C37.3781 29.2687 38.025 30.3094 38.3437 31.4625C38.625 32.4656 38.7562 33.6656 38.2312 34.6125C37.8375 35.3344 37.1531 36.0094 36.2906 36.0937C35.3719 36.1781 34.5375 35.5969 34.1812 34.7531C33.7781 33.7969 33.9 32.7281 34.1156 31.7437C34.3594 30.6281 34.6219 29.5594 34.65 28.4062C34.65 28.275 34.65 28.1344 34.65 28.0031C33.8719 29.9531 32.6625 31.7344 31.0594 33.0094C31.0406 33.9562 30.975 34.8844 31.5281 35.7094C31.9875 36.3937 32.6437 36.9 33.3844 37.2562C34.6219 37.8562 35.8969 37.9781 37.2375 38.1656C37.9312 38.2594 38.7469 38.3812 39.4687 38.6531C39.5531 38.4469 39.75 38.2875 40.0219 38.3156C41.0625 38.4094 41.55 36.9469 41.4937 36.1406C41.4469 35.5875 41.2781 35.1844 40.95 34.7437C40.6875 34.3781 40.4344 34.0312 40.2469 33.6187C40.1156 33.3281 40.3781 32.9344 40.6969 32.9344C41.85 32.9531 43.2 31.8281 43.4344 30.7031C43.5094 30.3562 43.4906 29.9812 43.4906 29.625C43.4812 29.25 43.5094 28.7156 43.2937 28.3875C42.9562 27.8625 42.4406 27.5344 42.1969 26.9344C42.0937 26.6906 42.2531 26.3437 42.5156 26.2781C43.2656 26.0812 44.1094 25.8 44.625 25.1813C45.1312 24.4969 45.0844 23.6906 45.0844 22.875Z"
              fill="#F6851F"
            />
            <path
              d="M15.2719 32.5219C15.0937 31.5938 14.9344 30.6844 14.9344 29.7375C14.9344 28.9031 14.9906 28.0781 15.0656 27.2438C15 27.5156 14.9344 27.7875 14.8594 28.0594C14.5875 29.0719 14.2219 30.0469 13.8656 31.0313C13.5656 31.8656 13.2656 32.8031 13.35 33.7031C13.3969 34.2188 13.5281 34.9125 13.9312 35.2781C14.3812 35.6812 15.0187 35.1281 15.2156 34.6875C15.525 34.0125 15.4125 33.225 15.2719 32.5219Z"
              fill="#3AB37C"
            />
            <path
              d="M26.2969 1.90313C25.9313 1.59375 25.4531 1.40625 24.9844 1.3125C24.1781 1.14375 22.8281 1.04063 22.3031 1.85625C22.1063 2.15625 21.7969 2.2125 21.4969 2.01563C20.0719 1.05 18.4313 1.66875 17.0906 2.46563C16.425 2.85938 15.9281 3.30938 15.5719 4.00313C15.3281 4.49063 14.9625 4.86563 14.3813 4.88438C14.025 4.89375 13.65 4.90313 13.3031 4.95938C12.9281 5.01563 12.6188 5.2125 12.3 5.4C11.625 5.8125 10.9688 6.27188 10.4156 6.83438C9.49689 7.77188 8.47501 9.31875 8.88751 10.7063C8.98126 11.0156 8.78439 11.3719 8.43751 11.3906C7.45314 11.4469 6.71251 12.0188 6.10314 12.7594C5.49376 13.4906 4.95939 14.2875 4.55626 15.15C4.21876 15.8813 3.62814 17.2313 4.10626 18.0094C4.54689 18.7313 5.20314 19.4625 4.78126 20.3625C4.42501 21.1219 3.61876 21.525 3.27189 22.2938C2.91564 23.1 2.85001 24.0281 2.93439 24.9C3.01876 25.7438 3.16876 26.6813 3.78751 27.3094C4.37814 27.9094 5.11876 28.2844 5.85939 28.6594C6.12189 28.7906 6.20626 29.0906 6.09376 29.3531C5.57814 30.5813 4.80939 31.7531 5.18439 33.1406C5.46564 34.1719 6.24376 35.1563 7.35939 35.25C7.85626 35.2875 8.41876 35.3625 8.68126 35.8406C8.97189 36.3469 8.70001 36.7594 8.65314 37.275C8.60626 37.7906 9.37501 38.0156 9.75001 38.0625C10.2375 38.1281 10.725 38.1094 11.2219 38.1094C11.5219 38.1094 11.7188 38.2875 11.775 38.5875C11.8594 39.0375 11.9813 39.1875 12.4219 39.3094C12.6094 39.3563 12.7313 39.4875 12.7781 39.6281C14.0719 39.2063 15.525 39.1219 16.8469 38.85C18.2344 38.5594 19.7625 38.2125 20.9531 37.4156C21.3656 37.1344 21.8344 36.7406 21.9656 36.2625C22.1344 35.6531 21.9469 35.0719 21.6375 34.5375C21.6 34.4813 21.5813 34.425 21.5719 34.3688C19.125 33.4219 17.0531 31.5469 15.9469 29.1094C15.9281 29.6531 15.9469 30.1969 15.9938 30.7406C16.0875 31.6781 16.3875 32.5875 16.4156 33.525C16.4344 34.4156 16.2469 35.2969 15.5531 35.8969C14.9438 36.4219 14.1469 36.6844 13.4438 36.2063C12.0563 35.2688 12.1875 33.0094 12.5906 31.6313C12.9281 30.4781 13.425 29.3813 13.7438 28.2281C14.0813 26.9906 14.325 25.7344 14.5688 24.4688C14.5875 24.3563 14.6344 24.2719 14.7 24.2063C14.5406 23.1094 14.4094 22.0125 14.2406 20.925C13.9219 18.8625 13.6406 16.7906 13.5 14.7188C13.4625 14.5781 13.5 14.4281 13.6313 14.2875C13.8188 14.0906 14.0156 14.0063 14.2781 13.9219C14.5688 13.8281 14.7938 13.6312 14.9719 13.3969C15.3563 12.8812 15.6375 12.3188 15.8531 11.7094C15.8063 11.6344 15.7688 11.55 15.7406 11.4563C15.2344 10.0594 16.6594 8.97188 17.9906 8.44688C17.7563 8.12813 17.6438 7.71563 17.7 7.2375C17.8219 6.19688 18.4688 5.325 19.3594 4.80938C20.8594 3.94688 23.1281 3.34688 24.5813 4.59375C25.0031 3.99375 25.6219 3.45938 26.3344 3.225C26.325 3.16875 26.325 3.09375 26.3344 3.02813C26.3906 2.7 26.5969 2.16563 26.2969 1.90313Z"
              fill="#F6851F"
            />
            <path
              d="M40.125 40.3031C39.6562 39.7313 38.8312 39.5063 38.1375 39.3563C36.4406 39 34.7344 39.0188 33.1312 38.2781C32.775 38.1188 32.4281 37.9219 32.1 37.7063C32.0156 38.2781 31.6781 38.8875 31.4531 39.3469C31.0219 40.2375 30.7031 41.2219 30.1031 42.0094C29.9719 42.1875 29.6719 42.2438 29.4844 42.1313C28.8656 41.775 28.5656 41.1188 28.3125 40.4719C28.1062 40.8938 27.7406 41.2313 27.2531 41.3344C26.4281 41.5219 25.7062 41.0625 25.4344 40.3406C25.2 40.8281 24.9469 41.3531 24.6 41.7563C24.3937 42 24.2812 42.3188 23.9719 42.4781C23.175 42.8813 22.6594 41.9063 22.425 41.2969C22.05 40.3313 21.4312 39.4688 21.0094 38.5219C19.2281 39.4781 16.7156 39.9281 15.225 40.1719C14.2031 40.3406 10.9875 40.6594 11.7469 42.3469C12.2344 43.4344 13.5562 44.25 14.5969 44.7469C15.7312 45.2906 16.9594 45.6375 18.2062 45.7969C19.6875 45.9938 21.15 46.2281 22.6406 46.3406C24.1687 46.4625 25.6969 46.5094 27.225 46.4906C30.1031 46.4531 33.0844 46.3031 35.7562 45.1125C37.275 44.4375 39.1312 43.6594 40.0969 42.2344C40.4906 41.6719 40.5937 40.8844 40.125 40.3031Z"
              fill="#D6E5E5"
            />
            <path
              d="M25.7063 23.8313C24.8344 23.5219 25.0406 21.9563 25.0406 21.2344C25.05 19.8188 24.7969 18.4125 24.9188 16.9875C24.975 16.3031 23.9156 16.0875 23.8594 16.7813C23.7281 18.4031 23.9719 20.0063 23.9625 21.6281C23.9531 22.7156 23.9813 24.3563 25.2188 24.7969C25.875 25.0219 26.3625 24.0656 25.7063 23.8313ZM30.9 15.7594C30 15.1031 28.8281 15.1875 28.0875 16.0406C27.6375 16.5656 28.4438 17.2781 28.8938 16.7531C29.0438 16.5844 29.2219 16.4719 29.4094 16.425C29.2031 17.3438 30.1406 18.3563 31.05 17.8594C31.9969 17.3625 31.6031 16.275 30.9 15.7594ZM21.2625 16.95C20.8688 15.4781 19.2656 15.4594 18.0563 15.7969C17.4375 15.9656 17.7 16.8375 18.2719 16.8375H18.4688C18.6188 16.8375 18.7313 16.7906 18.8063 16.7063C18.9938 16.6688 19.1906 16.6406 19.3875 16.65C19.05 17.1188 19.0406 17.8594 19.4906 18.2906C19.875 18.6469 20.5313 18.7125 20.9531 18.3844C21.4125 18.0281 21.4031 17.4563 21.2625 16.95ZM26.7375 27.3844C26.4188 27.6 26.0625 27.8906 25.6688 27.9656C25.3313 28.0219 24.6563 27.7969 24.5156 27.4594C24.2531 26.8219 23.2313 27.1688 23.5031 27.8156C23.7938 28.5 24.5344 28.8844 25.2375 29.025C26.025 29.1844 26.7188 28.6969 27.3375 28.275C27.9094 27.8906 27.3094 27 26.7375 27.3844Z"
              fill="black"
            />
            <path
              d="M45.8344 20.4094C45.6937 19.9406 45.4406 19.5187 45.1125 19.1625C44.9812 19.0125 44.2031 18.5344 44.2781 18.3C44.4375 17.8594 44.8219 17.4937 45.0562 17.0906C45.3094 16.6594 45.3469 16.1437 45.3656 15.6562C45.4125 14.7656 45.1781 13.8469 44.7937 13.05C44.1187 11.6625 42.8344 10.6313 41.3156 10.6031C41.4844 9.525 41.0344 8.39063 40.3219 7.575C39.825 7.0125 39.2719 6.47812 38.6437 6.06562C38.0719 5.69062 37.4812 5.69063 36.8531 5.71875C36.6562 4.74375 36.15 3.9375 35.2594 3.40313C34.4156 2.89688 33.3656 2.775 32.3719 2.74687C32.0062 1.75312 30.8719 1.125 29.9156 0.815625C28.9875 0.525 27.7406 0.459375 27.0375 1.17188C26.6156 0.740625 25.9312 0.496875 25.3875 0.346875C24.1781 0.0187502 22.65 0.0656251 21.7312 0.965625C21.1312 0.646875 20.5031 0.46875 19.7906 0.459375C18.9 0.45 18.0563 0.84375 17.2594 1.21875C16.5 1.575 15.7875 2.025 15.2156 2.64375C14.9437 2.94375 14.775 3.28125 14.5969 3.6375C14.4469 3.92813 14.1656 3.8625 13.8656 3.88125C13.4812 3.90938 13.1062 3.92813 12.7312 4.03125C12.3281 4.14375 11.9437 4.40625 11.5875 4.62188C10.7906 5.10938 10.0594 5.69063 9.42187 6.375C8.44687 7.41563 7.64062 8.9625 7.79062 10.4344C5.98125 10.8469 4.74375 12.6094 3.89062 14.1656C3.36562 15.1313 2.98125 16.2 2.94375 17.3063C2.925 17.8125 3.06562 18.2625 3.32812 18.6937C3.57187 19.0875 4.04062 19.5 3.81562 19.9969C3.64687 20.3625 3.23437 20.6437 2.95312 20.9344C2.61562 21.2906 2.37187 21.7312 2.2125 22.1906C1.85625 23.1562 1.82812 24.225 1.94062 25.2469C2.05312 26.2125 2.30625 27.1594 2.95312 27.9094C3.50625 28.5469 4.22812 28.9781 4.97812 29.3625C4.73437 29.8875 4.47187 30.4125 4.29375 30.9656C4.05937 31.7062 4.0125 32.4656 4.17187 33.2344C4.44375 34.5656 5.31562 35.5875 6.54375 36.15C6.76875 36.2531 7.05 36.2531 7.29375 36.2719C7.4625 36.2906 7.82812 36.2906 7.81875 36.4125C7.78125 36.7219 7.63125 37.0125 7.64062 37.3313C7.65 37.6688 7.78125 37.9594 7.97812 38.2312C8.63437 39.1312 9.84375 39.1594 10.8844 39.1406C11.0437 39.6 11.3062 39.9094 11.7281 40.125C11.2031 40.4719 10.7812 40.9594 10.6406 41.5969C10.3969 42.7313 11.3812 43.7344 12.15 44.4094C14.1281 46.1344 16.6969 46.65 19.2094 47.0156C22.1812 47.4469 25.2 47.6063 28.2094 47.5313C30.9844 47.4563 33.7687 47.1562 36.3281 46.0125C37.9312 45.2906 39.7219 44.4563 40.8187 43.0219C41.6437 41.9438 41.7187 40.5375 40.7906 39.5063C40.7156 39.4219 40.6312 39.3375 40.5375 39.2625C41.5125 39.0094 42.1781 38.0719 42.4312 37.0875C42.6094 36.4125 42.5344 35.5875 42.2625 34.95C42.0937 34.5375 41.8031 34.2 41.55 33.8438C42.7594 33.5063 43.8281 32.4281 44.2781 31.3313C44.5969 30.5531 44.55 29.5312 44.4281 28.7156C44.3625 28.2656 44.2031 27.8531 43.9031 27.4969C43.7719 27.3375 43.6031 27.1875 43.4625 27.0375C44.0719 26.8219 44.6437 26.5125 45.1406 26.0719C45.8344 25.4531 46.0875 24.5437 46.1062 23.6437C46.125 22.5656 46.1531 21.4594 45.8344 20.4094ZM27.3 4.13438C27.9656 4.2 28.6312 4.33125 29.2406 4.6125C29.8875 4.9125 30.2062 5.3625 30.2437 6.06562C30.2812 6.89062 30.6375 7.3875 31.4156 7.66875C32.0812 7.9125 32.7562 8.03438 33.1781 8.67188C33.4969 9.15938 33.2812 9.80625 32.9906 10.2469C32.0719 11.6063 30.2156 11.9438 29.0812 10.65C28.7531 10.2844 28.1062 10.4156 28.1437 10.9781C28.2 12.0938 26.8875 12.7031 25.95 12.7875C24.6281 12.9094 23.2313 12.45 22.4625 11.3344C22.2844 11.0813 22.0031 11.0625 21.75 11.1938C20.9156 11.625 20.0062 11.925 19.0687 12.0094C18.2625 12.075 17.2312 11.8781 16.7531 11.1563C16.4531 10.7063 17.1094 10.1719 17.4187 9.94688C17.9531 9.55313 18.6188 9.23438 19.275 9.14063C19.8469 9.05625 19.9125 8.25 19.3312 8.11875C18.6469 7.96875 18.6656 7.41563 18.8625 6.84375C19.1062 6.13125 19.8094 5.7 20.4562 5.4C21.5531 4.90313 23.1187 4.54688 24.075 5.50313C24.3375 5.76563 24.675 5.63438 24.825 5.39063C25.0406 5.44688 25.2844 5.39063 25.4344 5.16563C25.8094 4.575 26.5781 4.05938 27.3 4.13438ZM34.8375 21.2906C34.7531 22.2656 34.6594 23.2406 34.5187 24.1969C34.4719 24.2719 34.4531 24.3656 34.4531 24.4688V24.5906C34.4531 24.6 34.4531 24.6094 34.4531 24.6281C34.2375 25.9031 33.9281 27.1594 33.375 28.3688C32.4094 30.5063 30.7594 32.3156 28.6125 33.2906C26.4094 34.2844 23.8594 34.2094 21.6562 33.2719C19.9781 32.5688 18.4969 31.3594 17.5125 29.8313C16.5844 28.3875 16.1719 26.6625 15.8906 24.9938C15.5531 22.9688 15.2812 20.925 14.9906 18.8906C14.8031 17.5594 14.6531 16.2281 14.55 14.8875C14.625 14.8687 14.7 14.85 14.7469 14.8406C14.8781 14.8031 15 14.7281 15.1125 14.6531C15.3937 14.475 15.6375 14.2125 15.8344 13.95C16.1719 13.5 16.4344 13.0031 16.65 12.4875C17.2313 12.8437 17.9625 13.0125 18.5625 13.0312C19.7156 13.0781 20.8312 12.7406 21.8719 12.2531C22.9125 13.4531 24.5344 13.95 26.1281 13.7906C27.2906 13.6781 28.5281 12.975 28.9875 11.8969C29.5031 12.2625 30.1031 12.4875 30.7687 12.4969C31.6031 12.5062 32.3437 12.1969 32.9812 11.7C33.2812 12.2156 33.6937 12.6937 34.0687 13.1062C34.3781 13.4531 34.8375 13.9312 35.3344 14.1094C35.2031 16.5281 35.0531 18.9094 34.8375 21.2906ZM35.3625 30.8156C35.5969 29.7844 35.6719 28.7344 35.6625 27.6938C35.6812 27.7406 35.6906 27.7969 35.7094 27.8438C36.0375 28.8563 36.5437 29.7844 36.9656 30.7594C37.3781 31.7063 37.6687 32.6906 37.4625 33.7219C37.3312 34.3594 36.7594 35.0063 36.0937 35.0719C35.2875 35.1469 34.9781 34.1156 34.9312 33.4969C34.8656 32.5969 35.1656 31.6781 35.3625 30.8156ZM31.1062 37.4812C31.0781 37.3687 31.0594 37.5938 31.0594 37.6031C31.0219 37.7625 30.9656 37.9125 30.9094 38.0531C30.7875 38.3625 30.6469 38.6625 30.5062 38.9625C30.2062 39.5813 29.9719 40.2844 29.625 40.9031C29.3344 40.4812 29.1937 39.8531 29.025 39.45C28.6875 38.6719 28.1812 37.95 27.9187 37.1438C28.7906 37.0594 29.6344 36.8438 30.4594 36.4219C30.5437 36.375 30.6 36.3 30.6375 36.2156C30.675 36.2719 30.7031 36.3281 30.7406 36.3844C30.8812 36.6 31.05 36.8063 31.2375 36.9938C31.1062 37.1156 31.05 37.2844 31.1062 37.4812ZM26.5312 39.4875C26.5312 39.4875 26.5406 39.4781 26.5594 39.4594C26.5125 39.5156 26.6437 39.4031 26.6719 39.3938C26.6625 39.4031 26.8219 39.3469 26.8781 39.3281C27.075 39.2813 27.3656 39.3469 27.4312 39.4969C27.7406 40.1906 26.7469 40.65 26.4375 40.0781C26.5687 39.9281 26.625 39.7125 26.5312 39.4875ZM26.3625 38.4281C26.4937 38.1 26.6156 37.7812 26.8031 37.4812C26.8406 37.4156 26.8594 37.3594 26.8687 37.3031C26.9719 37.6594 27.1125 37.9969 27.2812 38.325C26.9719 38.2781 26.6437 38.3156 26.3625 38.4281ZM26.4187 36.1687C25.7906 36.1687 25.1625 36.1688 24.5531 36.0375C24.0562 35.9344 23.5875 35.8031 23.0812 35.7844C23.0812 35.4656 23.025 35.1281 22.8937 34.7625C24.0937 35.0531 25.3594 35.1281 26.625 34.9406C27.8625 34.7625 28.9969 34.3312 30 33.7312C30 34.125 30.0094 34.5 30.0937 34.9031C30.1312 35.0812 30.1781 35.2594 30.2437 35.4281C30.1594 35.4094 30.0656 35.4188 29.9812 35.4469C29.8969 35.475 29.8125 35.5125 29.7375 35.5688C29.7 35.6063 29.6625 35.6438 29.6344 35.6813C28.6125 36.1406 27.5344 36.1781 26.4187 36.1687ZM25.7719 37.2C25.4625 37.7531 25.2562 38.3813 24.975 38.9531C24.5719 39.7781 24.15 40.5656 23.6531 41.3438C23.6437 41.3625 23.625 41.3813 23.6156 41.4094C23.4937 41.2125 23.3906 40.9969 23.3344 40.7719C23.2125 40.3594 22.9031 39.9469 22.6969 39.5719C22.4344 39.1031 22.1812 38.6344 21.9656 38.1469C21.9375 38.0906 21.9094 38.0437 21.8719 37.9969C22.3031 37.6594 22.65 37.275 22.8656 36.825C22.8937 36.825 22.9312 36.8344 22.9594 36.825C23.5406 36.7969 24.1031 37.0125 24.675 37.1062C25.0219 37.1719 25.3969 37.1906 25.7719 37.2ZM15.2719 32.5219C15.4031 33.225 15.525 34.0125 15.225 34.6875C15.0281 35.1281 14.4 35.6906 13.9406 35.2781C13.5375 34.9125 13.4062 34.2188 13.3594 33.7031C13.275 32.8031 13.575 31.875 13.875 31.0313C14.2312 30.0469 14.5969 29.0719 14.8688 28.0594C14.9438 27.7875 15.0094 27.5156 15.075 27.2438C14.9906 28.0688 14.9344 28.9031 14.9437 29.7375C14.9344 30.6844 15.1031 31.5938 15.2719 32.5219ZM11.2406 38.1094C10.7531 38.1094 10.2562 38.1281 9.76875 38.0625C9.39375 38.0063 8.625 37.7906 8.67187 37.275C8.71875 36.7594 8.99062 36.3469 8.7 35.8406C8.42812 35.3625 7.86562 35.2969 7.37812 35.25C6.25312 35.1563 5.475 34.1719 5.20312 33.1406C4.82812 31.7531 5.59687 30.5719 6.1125 29.3531C6.225 29.0906 6.14062 28.7906 5.87812 28.6594C5.1375 28.2844 4.39687 27.9094 3.80625 27.3094C3.1875 26.6812 3.02812 25.7438 2.95312 24.9C2.86875 24.0281 2.925 23.1 3.29062 22.2937C3.6375 21.525 4.44375 21.1219 4.8 20.3625C5.22187 19.4625 4.56562 18.7313 4.125 18.0094C3.64687 17.2219 4.2375 15.8813 4.575 15.15C4.96875 14.2781 5.5125 13.4906 6.12187 12.7594C6.73125 12.0281 7.48125 11.4563 8.45625 11.3906C8.80312 11.3719 9 11.0156 8.90625 10.7062C8.49375 9.32812 9.525 7.78125 10.4344 6.83438C10.9875 6.27188 11.6437 5.8125 12.3187 5.4C12.6375 5.20313 12.9469 5.01563 13.3219 4.95938C13.6781 4.90313 14.0438 4.89375 14.4 4.88438C14.9813 4.86563 15.3469 4.49063 15.5906 4.00313C15.9469 3.30938 16.4437 2.85937 17.1094 2.46562C18.45 1.65937 20.0906 1.05 21.5156 2.01563C21.8156 2.2125 22.125 2.16562 22.3219 1.85625C22.8469 1.04063 24.1969 1.15313 25.0031 1.3125C25.4719 1.40625 25.95 1.59375 26.3156 1.90312C26.6156 2.15625 26.4094 2.7 26.3531 3.02812C26.3437 3.10312 26.3437 3.16875 26.3531 3.225C25.6406 3.45938 25.0219 3.99375 24.6 4.59375C23.1469 3.34688 20.8781 3.94688 19.3781 4.80938C18.4875 5.325 17.8312 6.19687 17.7187 7.2375C17.6625 7.70625 17.775 8.11875 18.0094 8.44688C16.6688 8.97188 15.2531 10.0594 15.7594 11.4562C15.7875 11.5406 15.8344 11.625 15.8719 11.7094C15.6562 12.3188 15.3844 12.8812 14.9906 13.3969C14.8125 13.6406 14.5781 13.8375 14.2969 13.9219C14.0437 14.0062 13.8469 14.0906 13.65 14.2875C13.5187 14.4281 13.4906 14.5781 13.5187 14.7187C13.6594 16.8 13.9406 18.8625 14.2594 20.925C14.4281 22.0125 14.5594 23.1094 14.7187 24.2063C14.6531 24.2719 14.6063 24.3563 14.5875 24.4688C14.3438 25.725 14.1 26.9906 13.7625 28.2281C13.4437 29.3906 12.9469 30.4875 12.6094 31.6313C12.2062 33.0094 12.075 35.2688 13.4625 36.2063C14.175 36.6844 14.9719 36.4219 15.5719 35.8969C16.2656 35.2875 16.4625 34.4063 16.4344 33.525C16.4156 32.5875 16.1062 31.6781 16.0125 30.7406C15.9562 30.1969 15.9469 29.6531 15.9656 29.1094C17.0812 31.5469 19.1531 33.4219 21.5906 34.3688C21.6 34.425 21.6187 34.4813 21.6562 34.5375C21.9656 35.0719 22.1531 35.6531 21.9844 36.2625C21.8531 36.7406 21.3844 37.1344 20.9719 37.4156C19.7812 38.2219 18.2531 38.5688 16.8656 38.85C15.5344 39.1219 14.0906 39.1969 12.7969 39.6281C12.7406 39.4781 12.6281 39.3562 12.4406 39.3094C12 39.1875 11.8781 39.0375 11.7937 38.5875C11.7375 38.2875 11.5406 38.1094 11.2406 38.1094ZM40.0969 42.2531C39.1312 43.6781 37.275 44.4563 35.7562 45.1313C33.0844 46.3219 30.1031 46.4719 27.225 46.5094C25.6969 46.5281 24.1687 46.4719 22.6406 46.3594C21.15 46.2469 19.6875 46.0125 18.2062 45.8156C16.9594 45.6563 15.7312 45.3094 14.5969 44.7656C13.5656 44.2688 12.2437 43.4531 11.7469 42.3656C10.9875 40.6875 14.2031 40.3594 15.225 40.1906C16.725 39.9375 19.2281 39.4969 21.0094 38.5406C21.4313 39.4875 22.0594 40.35 22.425 41.3156C22.6594 41.925 23.175 42.9 23.9719 42.4969C24.2812 42.3469 24.3844 42.0281 24.6 41.775C24.9469 41.3719 25.2 40.8375 25.4344 40.3594C25.7062 41.0813 26.4187 41.5406 27.2531 41.3531C27.7406 41.25 28.1062 40.9125 28.3125 40.4906C28.5656 41.1375 28.8656 41.7938 29.4844 42.15C29.6719 42.2625 29.9719 42.2062 30.1031 42.0281C30.7031 41.2312 31.0219 40.2563 31.4531 39.3656C31.6781 38.9063 32.0156 38.2969 32.1 37.725C32.4281 37.9406 32.7844 38.1375 33.1312 38.2969C34.7344 39.0375 36.4406 39.0188 38.1375 39.375C38.8312 39.5156 39.6562 39.75 40.125 40.3219C40.5937 40.8844 40.4906 41.6719 40.0969 42.2531ZM44.5875 25.1625C44.0812 25.7906 43.2281 26.0625 42.4781 26.2594C42.2156 26.325 42.0562 26.6719 42.1594 26.9156C42.4125 27.5063 42.9281 27.8438 43.2562 28.3688C43.4719 28.7063 43.4437 29.2312 43.4531 29.6062C43.4531 29.9625 43.4719 30.3375 43.3969 30.6844C43.1625 31.8187 41.8125 32.9344 40.6594 32.9156C40.3406 32.9156 40.0781 33.3094 40.2094 33.6C40.3969 34.0125 40.6406 34.3688 40.9125 34.725C41.2406 35.1656 41.4094 35.5687 41.4562 36.1219C41.5219 36.9187 41.025 38.3813 39.9844 38.2969C39.7125 38.2688 39.5156 38.4375 39.4312 38.6344C38.7094 38.3625 37.8937 38.2406 37.2 38.1469C35.8594 37.9594 34.5937 37.8375 33.3469 37.2375C32.6062 36.8813 31.95 36.375 31.4906 35.6906C30.9375 34.8656 31.0031 33.9281 31.0219 32.9906C32.625 31.7156 33.8437 29.9344 34.6125 27.9844C34.6125 28.1156 34.6125 28.2562 34.6125 28.3875C34.5844 29.5312 34.3219 30.6094 34.0781 31.725C33.8625 32.7094 33.7406 33.7781 34.1437 34.7344C34.5 35.5781 35.325 36.1594 36.2531 36.075C37.1156 35.9906 37.8 35.3156 38.1937 34.5938C38.7187 33.6375 38.5969 32.4469 38.3062 31.4438C37.9781 30.2906 37.3312 29.25 36.9 28.1438C36.4312 26.9719 36.1594 25.725 35.8125 24.5063C35.7656 24.3563 35.6812 24.2531 35.5687 24.2063C35.7562 22.875 35.8406 21.525 35.9437 20.2031C36.1125 18.0937 36.2344 15.975 36.3469 13.8562C36.5531 13.4812 36.1125 12.9375 35.6531 13.1531C35.5312 13.1062 35.4281 13.0313 35.3344 12.9469C35.0625 12.7313 34.8375 12.4781 34.6125 12.2156C34.3031 11.8406 33.9375 11.4 33.7219 10.95C34.1156 10.425 34.35 9.77813 34.3406 9.12188C34.3312 8.18438 33.5906 7.43437 32.7937 7.05C32.3906 6.85312 31.9312 6.7875 31.5187 6.59063C31.1344 6.4125 31.2656 5.83125 31.2094 5.475C31.0781 4.59375 30.3375 3.96563 29.5687 3.61875C28.9125 3.31875 28.0969 3.1125 27.3469 3.08438C27.3937 2.84063 27.4312 2.59688 27.4406 2.35313C27.4969 2.30625 27.5531 2.24063 27.5906 2.14688C27.9094 1.37813 28.9687 1.58438 29.5969 1.77188C30.2344 1.95938 31.3406 2.49375 31.425 3.2625C31.4531 3.5625 31.6875 3.73125 31.9781 3.74063C32.8594 3.74063 33.7781 3.81563 34.5844 4.2C35.4094 4.59375 35.7844 5.38125 35.8594 6.2625C35.8875 6.55313 36.1312 6.74063 36.4125 6.74063C36.9937 6.72188 37.4906 6.60938 38.025 6.9C38.5312 7.1625 38.9437 7.65 39.3375 8.05313C40.0594 8.775 40.5937 9.94687 40.0875 10.9406C39.9281 11.2594 40.1906 11.7656 40.5937 11.6813C42.1781 11.3625 43.3969 12.375 43.9781 13.7906C44.2594 14.4938 44.3719 15.2719 44.2781 16.0312C44.1656 16.8844 43.1719 17.4375 43.2187 18.3094C43.2656 19.1812 44.1 19.4812 44.5406 20.1094C45.075 20.8781 45.0469 21.9656 45.0469 22.8562C45.0844 23.6906 45.1312 24.4969 44.5875 25.1625Z"
              fill="black"
            />
          </svg>
          <h3 className="h3">{props.title}</h3>
        </div>
        <div className="flx rowM g4">
          <span className="p">{props.rating}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M4.53595 19.25L4.53696 20V19.25C4.61187 19.25 4.69103 19.2266 4.76562 19.1711C4.76577 19.171 4.76591 19.1709 4.76606 19.1708L9.55002 15.5846L9.99988 15.2474L10.4497 15.5846L15.235 19.1718L15.2359 19.1725C15.3057 19.2249 15.3852 19.2502 15.4632 19.2499C15.5412 19.2496 15.6206 19.2238 15.6902 19.1707L15.6921 19.1692C15.7623 19.1161 15.8199 19.0369 15.8506 18.9392C15.8813 18.8414 15.8818 18.7349 15.8519 18.6366L15.8518 18.6366L15.8502 18.6311L14.0655 12.6102L13.9159 12.1054L14.3398 11.7932L19.0737 8.30626C19.142 8.25191 19.1976 8.17289 19.2273 8.07645C19.2576 7.97783 19.2576 7.87089 19.2273 7.77231C19.1965 7.67456 19.1389 7.5951 19.0687 7.54146C18.9992 7.4884 18.9198 7.4622 18.8418 7.46128L12.971 7.45206L12.4237 7.4512L12.2576 6.92966L10.3877 1.05857C10.3565 0.960749 10.2985 0.881516 10.2279 0.82834C10.1578 0.775572 10.078 0.75 9.99958 0.75C9.92121 0.75 9.84133 0.775572 9.77128 0.82834C9.70105 0.881244 9.64326 0.95994 9.61193 1.05707C9.61177 1.05757 9.61161 1.05807 9.61145 1.05857L7.77445 6.92614L7.61007 7.4512L7.05988 7.45206L1.15963 7.46127C1.15924 7.46127 1.15886 7.46127 1.15848 7.46128C1.08047 7.46199 1.00107 7.48808 0.931568 7.54118C0.861181 7.59494 0.803604 7.67476 0.773069 7.77296C0.742462 7.8714 0.742302 7.97835 0.772633 8.07691C0.802237 8.17312 0.857794 8.25182 0.926003 8.30579L5.66057 11.7932L6.08448 12.1054L5.93485 12.6102L4.15015 18.6311L4.15018 18.6311L4.14835 18.6371C4.11836 18.7352 4.11878 18.8416 4.14949 18.9395C4.18013 19.037 4.23762 19.1162 4.30772 19.1693L4.31096 19.1718C4.37989 19.2246 4.45875 19.2501 4.53595 19.25Z"
              stroke="#FFAC33"
              stroke-width="1.5"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 7.77625e-08V16.1848L9.99988 16.1847L5.2146 19.7719C5.01107 19.9238 4.7746 20 4.53696 20C4.29156 20.0003 4.05248 19.9187 3.85461 19.767C3.65718 19.6173 3.50997 19.4063 3.43393 19.1641C3.35788 18.9219 3.35689 18.6608 3.43108 18.4179L5.21578 12.397L0.473441 8.90393C0.276714 8.75269 0.130582 8.5405 0.0558052 8.2975C-0.0189724 8.0545 -0.0185919 7.79304 0.0568905 7.55028C0.132374 7.30752 0.279119 7.09579 0.476284 6.94518C0.673449 6.79456 0.911005 6.71272 1.1552 6.71128L7.05871 6.70206L8.89694 0.8306C8.97411 0.588723 9.12213 0.378354 9.32002 0.229284C9.51791 0.0802147 9.75566 0 9.99958 0C9.99972 0 9.99986 7.77625e-08 10 7.77625e-08Z"
              fill="#FFAC33"
            />
          </svg>
        </div>
      </div>
      <p className="p gry100">
        {props.description}
      </p>
      
    </div>
            
            );
          }