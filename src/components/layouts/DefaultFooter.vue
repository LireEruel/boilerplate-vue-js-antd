<template>
  <div class="footer">
    <span class="copyright-string footer-text">
      Copyright ⓒ SSAFY Corporation. All Rights Reserved.
    </span>
    <router-link class="terms-of-use-link footer-text" to="/">
      이용약관
    </router-link>
    <router-link class="privacy-link footer-text" to="/">
      개인정보처리방침
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  text-align: center;
  height: 26px;
  margin: 5px 0;
}
.footer-logo {
  width: 105px;
}
.copyright-string {
  margin-left: 40px;
}
.terms-of-use-link,
.privacy-link {
  margin-left: 12px;
}
.footer-text {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);
}
</style>
