<template>
<div id="sidebar">
  <nav class="col-md-2 d-none d-md-block bg-light sidebar">
    <div class="sidebar-sticky">
      <h6 class="sidebar-heading d-flex justify-content-between align-items-center
        px-3 mt-4 mb-1 text-muted">
        <span>管理員</span>
        <a class="d-flex align-items-center text-muted" href="#">
          <span data-feather="plus-circle"></span>
        </a>
      </h6>
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link active" href="#">
            <router-link to="/admin/products"><font-awesome-icon :icon="['fas', 'box-open']" class="fa-1x mr-1"></font-awesome-icon>產品列表<span class="sr-only"></span></router-link>
          </a>
          <a class="nav-link active" href="#">
            <router-link to="/admin/orderlist"><font-awesome-icon :icon="['fas', 'box-open']" class="fa-1x mr-1"></font-awesome-icon>訂單列表<span class="sr-only"></span></router-link>
          </a>
        </li>
      </ul>

      <!-- <h6 class="sidebar-heading d-flex justify-content-between align-items-center
        px-3 mt-4 mb-1 text-muted">
        <span>Saved reports</span>
        <a class="d-flex align-items-center text-muted" href="#">
          <span data-feather="plus-circle"></span>
        </a>
      </h6>
      <ul class="nav flex-column mb-2">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span data-feather="file-text"></span>
            Current month
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span data-feather="file-text"></span>
            Last quarter
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span data-feather="file-text"></span>
            Social engagement
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span data-feather="file-text"></span>
            Year-end sale
          </a>
        </li>
      </ul> -->
    </div>
  </nav>
</div>
</template>

<style>

</style>
